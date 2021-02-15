import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import { toast, ToastContainer } from 'react-toastify';
import { emptyCart, loadCart } from '../core/helpers/cartHelper';
import { createOrder } from '../core/helpers/orderHelper';
import { isAuth } from '../auth/helpers/auth';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { 
    CartLeftPanel,
    CartPageWrapper, 
    CartRightPanel, 
    CartListBody, 
    CartListHeader, 
    CartItem, 
    CartListFooter, 
    ItemDetail, 
    ItemImg, 
    ItemImgWrapper, 
    ItemName, 
    ItemCategory, 
    ItemPrice, 
    PriceTable,
    PriceTableWrapper
} from '../core/Cart/CartPageElements';

import { PrimaryButton } from '../reuseableComponents/Buttons';
import { Link, Redirect } from 'react-router-dom';
import Base from '../core/Base';
import { GiCancel } from 'react-icons/gi';


const PaymentCallback = ({ match }) => {
    
    const { user: {_id: userId}, token } = isAuth();
    const [data, setData] = useState({
        TXNID: '',
        TXNAMOUNT: '',
        TXNSTATUS: '',
        TXNDATE: '',
        isComplete: false
    });
    const [cartProducts, setCartProducts] = useState([]);
    const [redirectToHome, setRedirectToHome] = useState(false);

    useEffect(() => {
        setCartProducts(loadCart());
        const orderProducts = loadCart();

        let data = match.params.data;
        const decode = jwt.decode(data);
        if(decode.msg){
            setData({ ...data, isComplete: true })
            return toast.error(decode.msg);
        }
        const { TXNID, TXNAMOUNT, STATUS, TXNDATE } = decode;
        setData({
            ...data,
            TXNID,
            TXNAMOUNT,
            TXNSTATUS: STATUS,
            TXNDATE,
            isComplete: true
        });

        
        if(STATUS !== 'TXN_SUCCESS'){
            return toast.error('Transaction Failed! In case any query, please contact us!');
        }
        console.log(orderProducts);
        if(!orderProducts){
            setRedirectToHome(!redirectToHome);
            return toast.error('Looks like your cart is Empty, Happy Shopping!');
        }
        const orderData = {
            products: orderProducts,
            transaction_id: TXNID,
            amount: TXNAMOUNT
        }
        // console.log();
        createOrder(userId, token, orderData).then(res => {
            if(res.error){
                return toast.error('Transaction has been completed, please note details and Contact our support!');
            }
            if(res.message){
                return toast.info(res.message + ' Please retrun to Home!');
            }
            // empty cart
            emptyCart();
            return toast.success('Your order has been placed successfully!');
        }).catch(err => {
            console.log(err);
            if(err?.response?.data?.error) return toast.error(err.response.data.error);
            return toast.error('Transaction has been completed, please note details and Contact our support!');
        });

        //eslint-disable-next-line
    }, []);

    const leftPanel = () => (
        <CartLeftPanel>
            <PriceTableWrapper>
                <CartListHeader>
                    { isComplete && TXNSTATUS ==='TXN_SUCCESS' ? ("Order Placed") : ("Order Detial") }
                </CartListHeader>
                
                <CartListBody>
                    {cartProducts && cartProducts.map((item, idx) => (
                        <CartItem key={idx}>
                            <ItemImgWrapper>
                                <ItemImg src={item.photo_url} />
                            </ItemImgWrapper>
                            <ItemDetail>
                                <ItemName>{item.name}</ItemName>
                                <ItemCategory>Category: <span>{item.category.name}</span></ItemCategory>
                                <ItemPrice>₹ {item.price}</ItemPrice> 
                            </ItemDetail>
                        </CartItem>
                    ))}
                </CartListBody>
                
                <CartListFooter>
                    <Link to="/">
                        <PrimaryButton width="220px">Take me Home</PrimaryButton>
                    </Link>
                </CartListFooter>

            </PriceTableWrapper>
        </CartLeftPanel>
    );

    const rightPanel = () => (
        <CartRightPanel>
            <PriceTableWrapper>
                <CartListHeader style={{ color: '#777' }}>Transaction Status</CartListHeader>
                {isComplete && TXNSTATUS === 'TXN_SUCCESS' ? (
                    <>
                        <AiOutlineCheckCircle size="2rem" style={{ textAlign: "center", color: "green", width: "100%" }} />
                        <p style={{ textAlign: "center",  width: "100%"}}>Payment successfull!</p>
                    <PriceTable>
                        <tbody style={{fontSize: '0.9rem'}}>
                            <tr>
                                <td>Txn Id</td>
                                <td style={{ textAlign: 'right'}}>{TXNID}</td>
                            </tr>
                            <tr>
                                <td>Txn Amount</td>
                                <td style={{ textAlign: 'right'}}>Rs. {TXNAMOUNT}</td>
                            </tr>
                            <tr>
                                <td>Txn Date</td>
                                <td style={{ textAlign: 'right'}}>{TXNDATE}</td>
                            </tr>
                        </tbody>
                    </PriceTable>
                    </>

                ) : (
                    <p style={{ textAlign: 'center', minHeight: '100px', padding: '1em'}}>
                        <GiCancel color="red" /> <br/>
                        <strong>Transaction Failed. Please try again later.</strong>
                    </p>
                )}
            </PriceTableWrapper>
        </CartRightPanel>
    );


    const { TXNID, TXNAMOUNT, TXNSTATUS, isComplete, TXNDATE } = data;
    return (
        <Base>
            <ToastContainer />
            { cartProducts && (
                <CartPageWrapper>
                    {leftPanel()}
                    {!isComplete ? (
                        <div>"Please wait we are processing your request..."</div>
                    ) : (
                        rightPanel()
                    )}
                </CartPageWrapper>
            )}
            { redirectToHome && (<Redirect to="/" />)}
        </Base>
    )
}

export default PaymentCallback
