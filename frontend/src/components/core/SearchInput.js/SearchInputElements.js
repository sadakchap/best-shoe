import styled from "styled-components" ;
import { FiSearch } from 'react-icons/fi';

export const SearchInputWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SearchInputField = styled.input`
    width: 60%;
    height: 100%;
    outline: none;
    border: none;
    background: #eee;
    border-radius: 20px;
    padding: 0 1em;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    color: #4e4e4e;
    font-size: 1rem;

    &::placeholder{
        font-weight: 500;
        color: #ccc;
        font-size: 0.9rem;
    }

    @media screen and (max-width: 500px){
        width: 90%;
    }

`;

export const SearchIcon = styled(FiSearch)`
    stroke: #4e4e4e;
    position: absolute;
    top: 50%;
    right: 21%;
    stroke-width: 3px;
    transform: translateY(-50%);
    @media screen and (max-width: 500px){
        right: 10%;
    }
`;