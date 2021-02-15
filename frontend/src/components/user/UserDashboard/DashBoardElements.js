import styled from 'styled-components';

export const UserDashBoardWrapper = styled.div`
    min-height: 100vh;
    padding: 1em 3em;
    margin: 1em auto;

    @media screen and (max-width: 500px){
        padding: 0.5em;
    }
`;

export const UserInfoDiv = styled.div`
    width: 400px;
    padding: 1em;
    display: flex;
    align-items: center;
    margin: 1em;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    background: #f1f1f1;
    color: #181818;

    @media screen and (max-width: 500px){
        width: 90%;
        margin: 1em auto;
    }
`;

export const UserAvatarDiv = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 10px;
    overflow: hidden;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);  
    
    @media screen and (max-width: 401px){
        width: 100px;
        height: 100px;
    }  
`;

export const UserAvatarImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const PurchaseInfoDiv = styled.div`
    width: 100%;
    padding: 1em;
    line-break: anywhere;

    & h2{
        font-size: 1rem;
        font-weight: 400;
    }
    & li{
        list-style: none;
        border-radius: 4px;
        overflow: hidden;
        border: 1px solid rgba(0, 0, 0, .2);
        margin: 1em auto;
    }
`;

export const OrderDetailHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    background: #ff7e39;
    color: #fff;
`;

export const OrderProduct = styled.div`
    width: 100%;
    display: flex;
    background: #efefef;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
`;

export const EmptyOrders = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1em;
    background: #f1f1f1;
    min-height: 300px;
    gap: 10px;

    & img{
        width: 200px;
        height: 150px;
        border: 1px solid rgba(0, 0, 0, 0.1);
    }
`;