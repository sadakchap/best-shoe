import styled from 'styled-components';

export const PrimaryButton = styled.button`
    position: relative;
    width: ${({width}) => width ? width : '180px'};
    padding: 10px 15px;
    border-radius: 30px;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    background: #FF7E39;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 500ms ease-in-out;
    box-shadow: 0px 0px 5px #ff7e3991;
    overflow: hidden;

    &:hover{
        box-shadow: 0px 10px 20px #ff7e3991;
    }
`;

export const SecondaryButton = styled.button`
    width: ${({width}) => width ? width : '100%'};
    padding: 10px 15px;
    border-radius: 30px;
    color: #FF7E39;
    font-weight: 600;
    font-size: 1rem;
    font-family: 'Raleway', sans-serif;
    border: none;
    outline: none;
    cursor: pointer;
    border: none;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    background: #fff;
    height: 50px;
`;