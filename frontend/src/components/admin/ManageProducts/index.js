import React, { useEffect, useState } from 'react'
import AdminBase from '../../core/AdminBase'
import { getProducts } from '../helpers/adminApicalls';
import ProductCard from '../AdminProductCard';
import { Wrapper } from './ManageElements';
import { toast, ToastContainer } from "react-toastify";

const ManageProducts = () => {

    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        getProducts().then(data => {
            if(data.error){
                return toast.error('Unable to fetch products info. Please try again later!')
            }
            setProducts(data);
        }).catch(err => {
            if(err?.response?.data?.error) return toast.error(err.response.data.error)
            return toast.error('Unable to fetch products info. Please try again later!')
        });
        
    }, [reload]);

    return (
        <AdminBase title="Manage Products" desc="See all of your products here.">
            <ToastContainer />
            <Wrapper>
                {products && (
                    products.map((product, idx) => (
                        <ProductCard product={product} key={idx} setReload={setReload} reload={reload} toast={toast} />
                    ))
                )}
            </Wrapper>
        </AdminBase>
    )
}

export default ManageProducts
