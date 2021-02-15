import styled from 'styled-components';

export const StyledFooter = styled.footer`
    position: relative;
    width: 100%;
    height: auto;
    padding: 50px 100px;
    background: #111;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 0.85rem;

    @media screen and (max-width: 991px){
        padding: 40px;
    }
`;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    
    @media screen and (max-width: 991px){
        flex-direction: column;
    }
`;

export const FooterSection = styled.div`
    margin-right: 30px;

    &.aboutus{
        width: 40%;
    }

    &.quicklink{
        position: relative;
        width: 25%;
    }
    &.contact{
        width: calc(35% - 60px);
        margin-right: 0 !important;
    }
    
    @media screen and (max-width: 991px){
        margin-right: 0;
        margin-bottom: 40px;

        &.aboutus, &.quicklink, &.contact{
            width: 100%;
        }
    }
    
`;

export const FooterHeaderText = styled.h2`
    position: relative;
    color: #fff;
    font-weight: 500;
    margin-bottom: 15px;
    &::before{
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 50px;
        height: 2px;
        background: #FF7E39;
    }
`;

export const FooterPText = styled.p`
    color: #999;
`;

export const FooterSocialIcons = styled.ul`
    margin-top: 20px;
    display: flex;

    & li {
        list-style: none;
    }

    & li a{
        display: inline-block;
        width: 40px;
        height: 40px;
        background: #222;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        text-decoration: none;
        border-radius: 4px;
        color: #fff;
        font-size: 1.1rem;

        &:hover{
            background: #ff5900;
        }
    }
`;

export const FooterLinkList = styled.ul`
    & li{
        list-style: none;
    }
    & li a{
        color: #999;
        text-decoration: none;
        margin-bottom: 10px;
        display: inline-block;
        &:hover{
            color: #fff;
        }
    }

    &.info{
        position: relative;

        & li{
            display: flex;
            margin-bottom: 16px;
        }

        & li span{
            color: #fff;
            font-size: 20px;
            margin-right: 10px;

        }
    }
`;

export const CopyRightContainer = styled.div`

`;

export const CopyRightText = styled.p`
    width: 100%;
    background: #181818;
    padding: 8px 100px;
    text-align: center;
    color: #999;
    font-size: 0.85rem;

    @media screen and (max-width: 991px){
        padding: 8px 40px;
    }
`;