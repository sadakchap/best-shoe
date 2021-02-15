import React, { useState } from 'react';
import Base from '../../core/Base';
import { SpinnerWrapper, Spinner } from '../../reuseableComponents/SpinnerButton';
import { FormWrapper, StyledForm, InputWrapper, StyledInput, FormHeaderText } from './SignupElements';
import { FiCheck } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import { signup, isAuth } from '../helpers/auth';
import { Redirect } from 'react-router-dom';
import { PrimaryButton } from '../../reuseableComponents/Buttons';

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        isLoading: false,
        isComplete: false
    });
    
    const handleChange = name => e => setValues({ ...values, [name]: e.target.value });

    const { name, email, password, passwordConfirm, isLoading, isComplete } = values;
    const handleSubmit = e => {
        e.preventDefault();
        if(!name || !email || !password){
            return toast.error('All fields are required!');
        }
        if(password !== passwordConfirm){
            return toast.error('Passwords must match!');
        }
        
        setValues({ ...values, isLoading: true });
        signup({ email, name, password }).then(data => {
            if(data.error)  return toast.error(data.error);
            setValues({ 
                ...values, 
                isLoading: false, 
                isComplete: true,
                name: '',
                email: '',
                password: '',
                passwordConfirm: ''
            });
            return toast.success(data.message);
        }).catch(err => {
            if(err?.response?.data?.error) return toast.error(err.response.data.error);
            setValues({ ...values, isComplete: false });
            return toast.error('Sorry, something went wrong!');
        });
    }

    return (
      <Base>
        {isAuth() && isAuth().user.role === 1 ? (
          <Redirect to="/admin/dashboard" />
        ) : null}
        {isAuth() ? <Redirect to="/user/dashboard" /> : null}
        <ToastContainer />
        <FormWrapper>
          <FormHeaderText>Join Us!</FormHeaderText>
          <StyledForm>
            <InputWrapper>
              <StyledInput
                type="text"
                placeholder="Name"
                onChange={handleChange("name")}
                value={name}
                style={{ textTransform: "capitalize" }}
              />
            </InputWrapper>
            <InputWrapper>
              <StyledInput
                type="email"
                placeholder="Email"
                onChange={handleChange("email")}
                value={email}
              />
            </InputWrapper>
            <InputWrapper>
              <StyledInput
                type="password"
                placeholder="Password"
                onChange={handleChange("password")}
                value={password}
              />
            </InputWrapper>
            <InputWrapper>
              <StyledInput
                type="password"
                placeholder="Password Confirm"
                onChange={handleChange("passwordConfirm")}
                value={passwordConfirm}
              />
            </InputWrapper>
            <br />
            <PrimaryButton
              width="180px"
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading || isComplete}
            >
              {!isComplete && "Sign up"}
              {isComplete && (
                <>
                  <FiCheck size="1.5rem" style={{ marginRight: "0.6em" }} />
                  Finished
                </>
              )}
              <SpinnerWrapper isClicked={isLoading}>
                <Spinner />
              </SpinnerWrapper>
            </PrimaryButton>
            <p
              style={{
                color: "#a5a2a2",
                textAlign: "left",
                fontSize: "0.9rem",
                marginTop: "2em",
                lineHeight: "0.9rem",
                letterSpacing: "0.5px"
              }}
            >
              <small>
                Note: Please use a dummy email address, if you don't have one,
                you can easily get one using{" "}
                <a
                  style={{ color: "#ff7e39" }}
                  href="https://temp-mail.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tempmail.org
                </a>
                !
              </small>
            </p>
          </StyledForm>
        </FormWrapper>
      </Base>
    );
}

export default Signup
