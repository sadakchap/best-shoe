import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { darken } from 'polished';

export const AdminWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    color: #eee;
    @media screen and (max-width: 991px){
        display: block;
    }
`;

export const LeftColumn = styled.div`
    position: relative;
    flex: 0.2;
    background-color: '#01408e';
    z-index: 999;
    
    @media screen and (max-width: 991px){
        position: absolute;
        height: 100vh;
        width: 300px;
        transition: 300ms ease-in-out;
        transform: ${({isOpen}) => !isOpen && "translateX(-90%)"};
    }
`;

export const RightColumn = styled.div`
    position: relative;
    flex: 0.8;
    min-height: 100vh;
    @media screen and (max-width: 991px){
        left: 30px;
        width: calc(100% - 30px);
        height: 100vh;
    }
`;

export const AdminLeftPanel = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    box-shadow: 0 0 2px rgba(0,0,0,.1);
    height: 100%;
    padding: 1.5rem;
    background-color: #01408e;
    z-index: 999;

    & li{
        width: 100%;
        list-style: none;
        border-bottom: 1px solid rgba(0,0,0, .5);
    }

`;

export const AdminPanelLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 50px;
    color: #EEFCCE;
    text-transform: capitalize;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    transition: color 200ms ease-in-out;

    &:hover{
        color: #ffba08;
    }
`;

export const AdminRightPanel = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background: ${darken(0.2, '#01408e')};
    padding: 2em 3em;
    overflow-y: auto;
    @media screen and (max-width: 500px){
        padding: 2em 1em;
    }
`;

export const AdminHeaderText = styled.h4`
    font-size: 1.5rem;
    font-weight: 500;
    font-family: 'Oswald', sans-serif;
`;

export const AdminHeadingP = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 0.8rem;
`;

export const AdminHeaderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Icon = styled.div`
    position: absolute;
    bottom: 1px;
    right: 1px;
    color: white;
    cursor: pointer;
    display: none;

    @media screen and (max-width: 991px){
        display: block;
    }

`;

export const HomeLink = styled(Link)`
    width: 100px;
    height: 40px;

    @media screen and (max-width: 500px){
        width: 60px;
        height: 30px;
        position: absolute;
        top: 1%; right: 1%;
        & button {
            font-size: 0.7rem !important;
        }
        z-index: 998;
    }
`;