import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
    margin: 0 auto;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    background: #fff;
    margin: 0 auto;
    padding: 2em;
    transition: 0.3s ease-in-out;
    position: sticky;
    top: 0;
    left: 0;
`;

export const NavLogoLink = styled(Link)`
    height: 100%;
    font-size: 2.5rem;
    text-decoration: none;
    color: #FF7E39;
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;

    & span{
        font-family: 'Raleway', sans-serif;
        text-transform: uppercase;
        font-size: 2rem;
        color: #000;
    }
`;

export const NavList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;

    @media screen and (max-width: 768px){
        padding-top: 1rem;
        flex-direction: column;
        top: 0;
        left: 0;
        width: 80%;
        background: white;
        position: absolute;
        min-height: 100vh;
        justify-content: flex-start;
        align-items: flex-start;
        transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(-100%)'};
        transition: transform 300ms ease-in-out;
        transform-origin: left;
        box-shadow: 2px 0 5px rgba(0,0,0,.2);
    }

`;

export const NavListItem = styled.li`
    list-style: none;
    
    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

export const NavItemLink = styled(Link)`
    font-size: .9rem;
    font-weight: 400;
    text-decoration: none;
    text-transform: capitalize;
    margin: 0 1rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    color: grey;
    letter-spacing: 1px;

    @media screen and (max-width: 768px){
        justify-content: flex-start;
        padding: 0.5em 2rem;
    }
`;

export const MenuWrapper = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    height: 60px;

    @media screen and (max-width: 768px){
        display: flex;
    }
`;