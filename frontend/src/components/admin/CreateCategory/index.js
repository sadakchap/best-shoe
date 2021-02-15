import React, { useState } from 'react'
import AdminBase from '../../core/AdminBase'
import { AdminFormWrapper, AdminForm } from '../CreateProduct/AdminForm';
import { InputWrapper, StyledInput } from '../../auth/Signup/SignupElements';
import { SpinnerWrapper, Spinner } from '../../reuseableComponents/SpinnerButton';
import { FiCheck } from 'react-icons/fi';
import { toast, ToastContainer } from "react-toastify";
import { createCategory } from '../helpers/adminApicalls';
import { isAuth } from '../../auth/helpers/auth';
import { useHistory } from 'react-router-dom';
import { PrimaryButton } from '../../reuseableComponents/Buttons';


const CreateCategory = () => {

    const { user: { _id: userId }, token } = isAuth();
    const [values, setValues] = useState({
        name: '',
        isLoading: false,
        isComplete: false
    });
    const history = useHistory();

    const handleChange = name => e => setValues({ ...values, [name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name){
            return toast.error('Please enter unique Category Name!')
        }
        setValues({ ...values, isLoading: true });
        createCategory(userId, token, { name }).then(data => {
            if(data.error){
                setValues({ ...values, isLoading: false });
                return toast.error(data.error);
            }
            toast.success(`New category "${data.name}" has been created!`, {autoClose: 1500})
            setValues({ ...values, name: '', isLoading: false, isComplete: true });
            return setTimeout(() => {
                history.push('/admin/dashboard');
            }, 2000);
        }).catch(err => {
            console.log('comming here');
            if(err?.response?.data?.error) return toast.error(err.response.data.error);
            setValues({ ...values, isLoading: false });
            return toast.error('Sorry, something went wrong!');
        })
    }

    const { name, isLoading, isComplete } = values;

    return (
        <>
        <ToastContainer />
        <AdminBase title="Add new category" desc="you can new categories here, they help product group together!">
            <AdminFormWrapper>
                <AdminForm onSubmit={handleSubmit}>
                    <InputWrapper>
                        <StyledInput placeholder="Name" onChange={handleChange("name")} value={name} />
                    </InputWrapper>
                    <br/>
                    <PrimaryButton type="submit" disabled={isLoading || isComplete}>
                        {!isComplete && "Add Category"}
                        {isComplete && (
                            <>
                                <FiCheck size="1.5rem" style={{ marginRight: '0.6em'}} />
                                Success
                            </>
                        )}
                        <SpinnerWrapper isClicked={isLoading} >
                            <Spinner />
                        </SpinnerWrapper>
                    </PrimaryButton>
                </AdminForm>
            </AdminFormWrapper>
        </AdminBase>
        </>
    )
}

export default CreateCategory
