import React, { useEffect, useState } from 'react';
import { InputWrapper, StyledInput } from '../../auth/Signup/SignupElements';
import AdminBase from '../../core/AdminBase';
import { SpinnerWrapper, Button, Spinner } from '../../reuseableComponents/SpinnerButton';
import { editProduct, getCategories, getProduct } from '../helpers/adminApicalls';
import { AdminForm, AdminFormWrapper, FormTextArea, InputFormGroup, InputSelect } from '../CreateProduct/AdminForm';
import { FiCheck } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import { isAuth } from '../../auth/helpers/auth';
import { useHistory } from 'react-router-dom';

const UpdateProduct = ({ match }) => {

    const productId = match.params.productId;
    const { user: { _id: userId }, token } = isAuth();
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

    const preloadCategories = () => {
        getCategories().then(data => {
            setCategories(data);
            // setValues({ ...values, formData: new FormData() });
        }).catch(err => {
            toast.error('Sorry, something went wrong. Please try again later!')
        });
    }

    const loadProductDetails = (productId) => {
        getProduct(productId).then(data => {
            if(data.error){
                return toast.error(data.error)
            }
            setValues({ 
                ...values,
                name: data.name,
                desc: data.desc,
                price: data.price,
                stock: data.stock,
                category: data.category,
                formData: new FormData() 
            });
        }).catch(err => {
            return toast.error('Sorry, something went wrong. Please try again later!')
        })
    }

    useEffect(() => {
        preloadCategories();
        loadProductDetails(productId);
        // eslint-disable-next-line
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submitting form');

        if(price < 1 && stock < 0){
            return toast.error('Price & Stock can not be negative!')
        }

        setValues({ ...values, isLoading: true });
        
        editProduct(userId, token, productId, formData).then(data => {
            if(data.error){
                setValues({ ...values, isLoading: false });
                return toast.error(data.error);
            }
            toast.success(`"${name}" updated successfully!`);
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
        <AdminBase
          title="Update Product Details"
          desc="Here, you can easily update product details!"
        >
          <AdminFormWrapper>
            <AdminForm onSubmit={handleSubmit}>
              <InputWrapper>
                <StyledInput
                  placeholder="Name"
                  onChange={handleChange("name")}
                  value={name}
                />
              </InputWrapper>
              <InputWrapper>
                <FormTextArea
                  rows="8"
                  placeholder="Add Product desciption"
                  onChange={handleChange("desc")}
                  value={desc}
                ></FormTextArea>
              </InputWrapper>
              <InputFormGroup>
                <InputWrapper>
                  <StyledInput
                    placeholder="Price"
                    type="Number"
                    onChange={handleChange("price")}
                    value={price}
                  />
                </InputWrapper>
                <InputWrapper>
                  <StyledInput
                    placeholder="Stock"
                    type="Number"
                    onChange={handleChange("stock")}
                    value={stock}
                  />
                </InputWrapper>
              </InputFormGroup>
              <InputFormGroup>
                <InputWrapper>
                  <StyledInput
                    placeholder="Stock"
                    type="file"
                    onChange={handleChange("photo")}
                  />
                </InputWrapper>
                <InputSelect
                  value={category}
                  name="category"
                  onChange={handleChange("category")}
                >
                  <option>Select Category</option>
                  {categories &&
                    categories.map((cate, idx) => (
                      <option key={idx} value={cate._id}>
                        {cate.name}
                      </option>
                    ))}
                </InputSelect>
              </InputFormGroup>
              <Button type="submit" disabled={isLoading || isComplete}>
                {!isComplete && "Save Product"}
                {isComplete && (
                  <>
                    <FiCheck />
                    Success
                  </>
                )}
                <SpinnerWrapper isClicked={isLoading}>
                  <Spinner />
                </SpinnerWrapper>
              </Button>
            </AdminForm>
          </AdminFormWrapper>
        </AdminBase>
      </>
    );
}

export default UpdateProduct
