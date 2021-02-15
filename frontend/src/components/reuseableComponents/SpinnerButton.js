import styled, { keyframes, css } from 'styled-components';
import { rgba, darken } from "polished";

const colorPrimary = '#FF7E39';

const spin = keyframes`
    100%{ transform: rotate(360deg) }
`;

const spinnerOpenStyles = css`
    visibility: visible;
    opacity: 1;
`;

export const SpinnerWrapper = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    ${({isClicked}) => isClicked && spinnerOpenStyles };
    transition: visibility, opacity;
    transition-duration: 300ms;
    background: ${darken(0.2, colorPrimary)};
`;

export const Spinner = styled.span`
    display: inline-block;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    border: 5px solid ${rgba("white", 0.25)};
    border-top-color: white;
    animation: ${spin} 1s infinite linear;
    z-index: 2;
`;

export const Button = styled.button`
  position: relative;
  overflow: hidden;
  min-width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em auto;
  border: 0;
  padding: 0;
  background: ${colorPrimary};
  height: 50px;
  border-radius: 0;
  letter-spacing: 1px;
  color: white;
  outline: none;
  cursor: pointer;
  transition: background, box-shadow 0.25s;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  box-shadow: 0 0px 10px rgba(0,0,0, .1);
  
  &:hover{
      box-shadow: 5px 10px 10px rgba(0,0,0, .1);
  }
`;