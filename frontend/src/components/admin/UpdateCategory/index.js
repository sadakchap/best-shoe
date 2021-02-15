import React, { useEffect, useState } from 'react'
import AdminBase from '../../core/AdminBase'
import { AdminFormWrapper, AdminForm } from '../CreateProduct/AdminForm';
import { InputWrapper, StyledInput } from '../../auth/Signup/SignupElements';
import { SpinnerWrapper, Spinner } from '../../reuseableComponents/SpinnerButton';
import { FiCheck } from 'react-icons/fi';
import { toast, ToastContainer } from "react-toastify";
import { updateCategory, getACategory } from '../helpers/adminApicalls';
import { isAuth } from '../../auth/helpers/auth';
import { useHistory } from 'react-router-dom';
import { PrimaryButton } from '../../reuseableComponents/Buttons';


const UpdateCategory = ({ match }) => {

    const categoryId = match.params.categoryId;
    const { user: { _id: userId }, token } = isAuth();
    const [values, setValues] = useState({
        name: '',
        isLoading: false,
        isComplete: false
    });
    const history = useHistory();
    
    useEffect(() => {
        setValues({ ...values, isLoading: true });
        getACategory(categoryId).then(data => {
            setValues({ ...values, isLoading: false, name: data.name });
        }).catch(err => {
            if(err?.response?.data?.error) return toast.error(err.response.data.error);
            setValues({ ...values, isLoading: false });
            return toast.error('Sorry, something went wrong!');
        })
        // eslint-disable-next-line
    }, []);

    const handleChange = name => e => setValues({ ...values, [name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name){
            return toast.error('Please enter unique Category Name!')
        }
        setValues({ ...values, isLoading: true });
        updateCategory(userId, token, { name }, categoryId).then(data => {
            if(data.error){
                setValues({ ...values, isLoading: false });
                return toast.error(data.error);
            }
            toast.success(`New category "${data.name}" has been created!`, {autoClose: 1500})
            setValues({ ...values, name: '', isLoading: false, isComplete: true });
            return setTimeout(() => {
                history.push('/admin/manage/categories');
            }, 2000);
        }).catch(err => {
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

export default UpdateCategory
