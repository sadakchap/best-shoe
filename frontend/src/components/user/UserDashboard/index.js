import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { isAuth } from '../../auth/helpers/auth'
import Base from '../../core/Base'
import { PrimaryButton } from '../../reuseableComponents/Buttons'
import { getUserPurchaseList } from '../helpers/userApiCalls'
import { UserDashBoardWrapper, UserInfoDiv, UserAvatarDiv, UserAvatarImg, PurchaseInfoDiv, OrderDetailHeader, OrderProduct, EmptyOrders } from './DashBoardElements'
import emptyOrderImg from '../../../assets/img/emptyorders.png'

const UserDashboard = () => {

    const { user: { _id: userId, name, email}, token } = isAuth();
    const [values, setValues] = useState({
        purchaseList: [],
        isLoading: true
    });

    useEffect(() => {
        
        getUserPurchaseList(userId, token).then(data => {
            setValues({ 
                ...values, 
                purchaseList: data, 
                isLoading: false
            });

        }).catch(err => {
            setValues({ 
                ...values, 
                isLoading: false
            });
            console.log(err);
        })
        // eslint-disable-next-line
    }, []);

    const { purchaseList, isLoading } = values;

    return (
        <Base>
            <UserDashBoardWrapper>
                <UserInfoDiv>
                    <UserAvatarDiv>
                        <UserAvatarImg src='https://images.pexels.com/photos/463684/pexels-photo-463684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                    </UserAvatarDiv>
                    <div style={{ lineBreak: "anywhere" }}>
                        <p>{name}</p>
                        <p>{email}</p>
                    </div>
                </UserInfoDiv>
                <PurchaseInfoDiv>
                    <h2>Orders Placed - </h2>
                    <br/>
                    {isLoading ? (
                        "Loading..."
                    ) : (
                        <ul>
                            {purchaseList.length ? (purchaseList.map((order, idx) => (
                                <li key={idx}>
                                    <OrderDetailHeader>
                                        <span>Order Status: {order.status}</span>
                                        <span>Total Amount: ₹ {order.amount}</span>
                                    </OrderDetailHeader>
                                    {order.products.map((prod, idx) => (
                                        <OrderProduct key={idx}>
                                            <p>{prod.name}</p>
                                            <p>{prod.price}</p>
                                            <p>{prod.quantity}</p>
                                        </OrderProduct>
                                    ))}
                                </li>
                            ))) : (
                                <EmptyOrders>
                                    <img src={emptyOrderImg} alt="No orders found!"/>
                                    <p>Looks like you haven't placed any Orders yet!</p>
                                    <Link to="/">
                                        <PrimaryButton>Start Shopping</PrimaryButton>
                                    </Link>
                                </EmptyOrders>
                            )}
                        </ul>
                    )}

                </PurchaseInfoDiv>           
            </UserDashBoardWrapper>
        </Base>
    )
}

export default UserDashboard
