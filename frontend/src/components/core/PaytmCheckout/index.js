import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isAuth } from '../../auth/helpers/auth';
import { PrimaryButton } from '../../reuseableComponents/Buttons';
import { Spinner, SpinnerWrapper } from '../../reuseableComponents/SpinnerButton';
import { getTotalAmount } from '../helpers/cartHelper';
import { initiateTransaction } from '../helpers/paytmPaymentHelper';


const PaytmCheckout = (props) => {
    
    const { user: {_id: userId}, token } = isAuth();
    const [paytmParam, setPaytmParam] = useState({
        MID: '',
        ORDER_ID: '',
        TXN_TOKEN: '',
        isLoading: false,
        isComplete: false
    });

    const { setIsModalOpen, isAgree } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!isAgree){
            return setIsModalOpen(true);
        }
        const totalAmount = getTotalAmount();
        setPaytmParam({ ...paytmParam, isLoading: true });
        initiateTransaction(userId, token, totalAmount).then(data => {
            setPaytmParam({
                MID: process.env.REACT_APP_PAYTM_MERCHANT_ID,
                ORDER_ID: data.orderId,
                TXN_TOKEN: data.txnToken,
                isLoading: false,
                isComplete: true
            });
            e.target.submit();
        }).catch(err => {
            console.log(err);
            toast.error('Sorry, something went wrong!')
        });
    }   
    const {
        MID,
        ORDER_ID,
        TXN_TOKEN,
        isLoading,
        isComplete
     } = paytmParam;


    return (
        <>
            <form action={`https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=${process.env.REACT_APP_PAYTM_MERCHANT_ID}&orderId=${ORDER_ID}`} method="post" onSubmit={handleSubmit}>
                <input type="hidden" name="mid" value={MID} />
                <input type="hidden" name="orderId" value={ORDER_ID} />
                <input type='hidden' name='txnToken' value={TXN_TOKEN} />

                <PrimaryButton width="100%" type="submit" disabled={isLoading || isComplete}>
                        {!isComplete && "Pay with paytm"}
                        {isComplete && (
                            <>
                                Ridrecting to Patym
                            </>
                        )}
                        <SpinnerWrapper isClicked={isLoading}>
                            <Spinner />
                        </SpinnerWrapper>
                    </PrimaryButton>
            </form>
        </>
    )
}

export default PaytmCheckout;
