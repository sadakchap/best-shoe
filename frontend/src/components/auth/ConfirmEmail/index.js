import React, { useState, useEffect } from 'react';
import { ContainerWrapper, Content, HeaderText, PText, InlineForm } from './ConfirmEmailElements';
import { Spinner, SpinnerWrapper } from '../../reuseableComponents/SpinnerButton';
import { FiCheck } from 'react-icons/fi';
import { ToastContainer, toast } from "react-toastify";
import { confirmEmail } from '../helpers/auth';
import { useHistory } from "react-router-dom";
import { PrimaryButton } from '../../reuseableComponents/Buttons';

const ConfirmEmail = ({ match }) => {

    const [values, setValues] = useState({
        isLoading: false,
        token: '',
        isComplete: false
    });
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!token){
            return toast.error('Broken Link 🔗');
        }
        setValues({ ...values, isLoading: true });
        confirmEmail(token).then(data => {
            if(data.error) return toast.error(data.error);
            toast.success(data.message);
            setValues({ ...values, isLoading: false, isComplete: true });
            return setTimeout(() => {
                history.push('/signin');
            }, 2000);
        }).catch(err => {
            console.log(err);
            if(err?.response?.data?.error) return toast.error(err.response.data.error);
            setValues({ ...values, isComplete: false });
            return toast.error('Sorry, something went wrong!');
        });

    }

    useEffect(() => {
        const token = match.params.token;
        setValues({ ...values, token });
        // eslint-disable-next-line
    }, []);

    const { isLoading, token, isComplete } = values;

    return (
        <>
            <ContainerWrapper>
                <ToastContainer />
                <Content>
                    <HeaderText>Confirm email</HeaderText>
                    <PText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque autem ab minima culpa deserunt, sapiente optio vitae doloremque quod magni iure quibusdam a aliquam placeat! Consectetur quos animi repudiandae.</PText>
                    <InlineForm>
                        <PrimaryButton type="submit" onClick={handleSubmit} disabled={isLoading || isComplete}>
                            {!isComplete && "Confirm"}
                            {isComplete && (
                                <>
                                    <FiCheck size="1.5rem" style={{ marginRight: '0.6em'}} />
                                    Confirmed
                                </>
                            )}
                            <SpinnerWrapper isClicked={isLoading}>
                                <Spinner />
                            </SpinnerWrapper>
                        </PrimaryButton>
                    </InlineForm>
                </Content>
            </ContainerWrapper>
        </>
    )
}

export default ConfirmEmail
