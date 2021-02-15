import React, { useEffect, useState } from 'react';
import { InputWrapper, StyledInput } from '../../auth/Signup/SignupElements';
import AdminBase from '../../core/AdminBase';
import { SpinnerWrapper, Spinner } from '../../reuseableComponents/SpinnerButton';
import { addProduct, getCategories } from '../helpers/adminApicalls';
import { AdminForm, AdminFormWrapper, FormTextArea, InputFormGroup, InputSelect } from './AdminForm';
import { FiCheck } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import { isAuth } from '../../auth/helpers/auth';
import { useHistory } from 'react-router-dom';
import { PrimaryButton } from '../../reuseableComponents/Buttons';

const CreateProduct = () => {

    const { user, token } = isAuth();
    const [categories, setCategories] = useState([]);
    const [values, setValues] = useState({
        name: '',
        desc: '',
        price: '',
        stock: '',
        category: '',
        photo: '',
        isLoading: false,
        isComplete: false,
        formData: null
    });
    const history = useHistory();
    useEffect(() => {
        getCategories().then(data => {
            console.log(data);
            setCategories(data);
            setValues({ ...values, formData: new FormData() });
        }).catch(err => {
            toast.error('Sorry, something went wrong. Please try again later!')
        });
        // eslint-disable-next-line
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submitting form');
        if(!name || !desc || !price || !stock || !category){
            return toast.error('All fields are required!')
        }
        if(price < 1 && stock < 0){
            return toast.error('Price & Stock can not be negative!')
        }
        setValues({ ...values, isLoading: true });
        addProduct(user._id, token, formData).then(data => {
            if(data.error){
                setValues({ ...values, isLoading: false });
                return toast.error(data.error);
            }
            toast.success('New Product created!');
            setValues({
                ...values,
                name: '',
                desc: '',
                price: '',
                stock: '',
                category: '',
                photo: '',
                isLoading: false,
                isComplete: true,
                formData: new FormData()
            });

            return setTimeout(() => {
                history.push('/admin/manage/products')
            }, 2000);

        }).catch(err => {
            if(err?.response?.data?.error) return toast.error(err.response.data.error);
            setValues({ ...values, isLoading: false, isComplete: false });
            return toast.error('Sorry, something went wrong!');
        })

    }

    const handleChange = name => e => {
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        if((name === 'price' || name === 'stock') && e.target.value < 0 ){
            toast.error('Price & Stock can not be negative!')
        }
        setValues({ ...values, [name]: value });
        formData.set(name, value);
    }

    const { name, desc, price, stock, isLoading, isComplete, category, formData } = values;

    return (
        <>
            <ToastContainer />    
            <AdminBase title="Add new products" desc="you can add info about new stock here!">
                <AdminFormWrapper>
                    <AdminForm onSubmit={handleSubmit}>
                        <InputWrapper>
                            <StyledInput placeholder="Name" onChange={handleChange("name")} value={name} />
                        </InputWrapper>
                        <InputWrapper>
                            <FormTextArea rows="8" placeholder="Add Product desciption" onChange={handleChange("desc")} value={desc}></FormTextArea>
                        </InputWrapper>
                        <InputFormGroup>
                            <InputWrapper>
                                <StyledInput placeholder="Price" type="Number" onChange={handleChange("price")} value={price} />
                            </InputWrapper>
                            <InputWrapper>
                                <StyledInput placeholder="Stock" type="Number" onChange={handleChange("stock")} value={stock} />
                            </InputWrapper>
                        </InputFormGroup>
                        <InputFormGroup>
                            <InputWrapper>
                                <StyledInput placeholder="Stock" type="file" onChange={handleChange("photo")} />
                            </InputWrapper>
                            <InputSelect name="category" onChange={handleChange("category")}>
                                <option value="">Select Category</option>
                                {categories && categories.map((cate, idx) => (
                                    <option key={idx} value={cate._id}>{cate.name}</option>
                                ))}
                            </InputSelect>
                        </InputFormGroup>
                        <br/>
                        <PrimaryButton type="submit" disabled={isLoading || isComplete}>
                            {!isComplete && "Add Product"}
                            {isComplete && (
                                <>
                                    <FiCheck />
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

export default CreateProduct
