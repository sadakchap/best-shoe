import React, { useEffect, useState } from 'react';
import AdminBase from '../../core/AdminBase';
import { toast, ToastContainer } from 'react-toastify';
import { isAuth } from '../../auth/helpers/auth';
import { getOrders } from '../helpers/adminApicalls';
import { OrderTable } from './OrderElements';


const ManageOrders = () => {

    const { user: { _id: userId}, token } = isAuth();
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getOrders(userId, token).then(data => {
            setOrders(data);
            setIsLoading(false);
        }).catch(err => {
            if(err?.response?.data?.error) return toast.error(err.response.data.error);
            setIsLoading(false);
            return toast.error('Sorry, something went wrong!');
        });
        // eslint-disable-next-line
    }, []);

    return (
        <AdminBase  title="Manage Orders" desc="You can see all of Orders here.">
            <ToastContainer />
            { isLoading ? (
                'Loading...'
            ): (
                <div style={{overflowX:"auto"}}>
                    <OrderTable>
                        <thead>
                            <tr>
                                <th>S.no.</th>
                                <th>Order Id</th>
                                <th>Transaction Id</th>
                                <th>Order Anount</th>
                                <th>Order Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length && orders.map((order, idx) => (
                                <tr key={idx}>
                                    <td>{idx+1}</td>
                                    <td>{order._id}</td>
                                    <td>{order.transaction_id}</td>
                                    <td>{order.amount}</td>
                                    <td>{order.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </OrderTable>
                </div>
            )}
        </AdminBase>
    )
}

export default ManageOrders
