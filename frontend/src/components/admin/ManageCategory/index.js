import React, { useEffect, useState } from 'react';
import AdminBase from '../../core/AdminBase';
import { toast, ToastContainer } from 'react-toastify';
import { getAllCategories, removeCategory } from '../helpers/adminApicalls';
import { CategoryCardWrapper, CategoryCardTitle, CategoryCardAction, CategoryWrapper, CategoryCardActionDiv } from './CategoryElements';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { isAuth } from '../../auth/helpers/auth';

const ManageCategory = () => {

    const { user: { _id: userId}, token } = isAuth();
    const [categories, setCategories] = useState([]);
    const [reload, setReload] = useState(false);
    
    useEffect(() => {
        getAllCategories().then(data => {
            if(data.error){
                return toast.error('Unable to fetch products info. Please try again later!')
            }
            setCategories(data);
        }).catch(err => {
            if(err?.response?.data?.error) return toast.error(err.response.data.error)
            return toast.error('Unable to fetch Categories info. Please try again later!')
        })
    }, [reload]);

    const handleDelete = (id) => e => {
        e.preventDefault();
        removeCategory(userId, token, id).then(data => {
            setReload(!reload);
            return toast.success(data.message);
        }).catch(err => {
            if(err?.response?.data?.error) return toast.error(err.response.data.error);
            return toast.error('Sorry, something went wrong!');
        });
    }

    return (
        <AdminBase  title="Manage Categories" desc="See all of your Categories here.">
            <ToastContainer />
            <CategoryWrapper>
                { categories && categories.map((cate, idx) => (
                    <CategoryCardWrapper key={idx}>
                        <CategoryCardTitle>{(cate.name).charAt(0).toUpperCase() + (cate.name).slice(1)}</CategoryCardTitle>
                        <CategoryCardActionDiv>
                            <CategoryCardAction to={`/admin/category/edit/${cate._id}`}>
                                <AiFillEdit />
                                Edit
                            </CategoryCardAction>
                            <CategoryCardAction to={`/admin/category/delete/${cate._id}`} onClick={handleDelete(cate._id)}>
                                <AiFillDelete />
                                Delete
                            </CategoryCardAction>
                        </CategoryCardActionDiv>
                    </CategoryCardWrapper>
                ))}
            </CategoryWrapper>
        </AdminBase>
    )
}

export default ManageCategory
