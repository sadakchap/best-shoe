import styled from 'styled-components';

export const HeroSectionWrapper = styled.div`
    margin-bottom: 2em;
    position: relative;
    padding: 60px 5em;
    width: 100%;
    min-height: 700px;
    background: linear-gradient(297.36deg, #FFFB99 -14.73%, #F7A458 58.41%, #FF8979 103.21%);
    overflow: hidden;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        min-height: 100vh;
        padding-top: 80px;
    }

    @media screen and (max-width: 500px){
        padding: 60px 2em;
    }

    &::before{
        content: '';
        position: absolute;
        width: 600px;
        height: 200px;
        top: 0;
        transform: rotate(-40deg) translate(-20%, -50%);
        background: rgba(242, 228, 221, 0.2);
        background-blend-mode: overlay;
        border-radius: 150px;
    }
    &::after{
        content: '';
        position: absolute;
        width: 600px;
        height: 200px;
        bottom: 0;
        transform: rotate(-40deg);
        background: rgba(242, 228, 221, 0.2);
        background-blend-mode: overlay;
        border-radius: 150px;
    }
`;

export const BackgroundDiv = styled.div`
    position: absolute;
    width: 600px;
    height: 200px;
    bottom: 20%;
    right: -15%;
    transform: rotate(-40deg);
    background: rgba(242, 228, 221, 0.2);
    background-blend-mode: overlay;
    border-radius: 150px;

    @media screen and (max-width: 768px){
        display: none;
    }

    &::before{
        content: '';
        position: absolute;
        width: 100px;
        height: 100px;
        top: -300%;
        background: rgba(242, 228, 221, 0.2);
        background-blend-mode: overlay;
        border-radius: 100px;
    }
    &::after{
        content: '';
        position: absolute;
        width: 50px;
        height: 50px;
        top: -150%;
        right: 10%;
        background: rgba(242, 228, 221, 0.4);
        background-blend-mode: overlay;
        border-radius: 50px;
    }

`;

export const HeaderContent = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

export const HeaderContentWrapper = styled.div`
    width: 100%;
`;

export const HeaderText = styled.h1`
    width: 100%;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 4.5rem;
    line-height: 4.5rem;
    color: #FEFEFE;
    & span{
        position: relative;
        text-transform: capitalize;
        &::before{
            content: '';
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 5px;
            color: #FEFEFE;
        }
    }

    @media screen and (max-width: 1024px){
        font-size: 3rem;
        line-height: 4rem;
    }
    @media screen and (max-width: 768px){
        font-size: 2.5rem;
    }
    @media screen and (max-width: 500px){
        font-size: 2.5rem;
        line-height: 3rem;
    }

`;

export const HeaderHelpText = styled.p`
    width: 90%;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 30px;
    letter-spacing: -0.015em;
    color: #FEFEFE;

    @media screen and (max-width: 768px){
        font-size: 0.8rem;
        line-height: 20px;
    }
`;

export const HeaderImgWrapper = styled.div`
    position: absolute;
    width: 50%;
    right: 0;
    z-index: 997;
    
    @media screen and (max-width: 768px){
        display: none;
        width: 60%;
        align-self: flex-end;
    }
`;

export const HeaderImg = styled.img`
    width: 100%;
    height: 100%;
    transform: scaleX(-1);
`;