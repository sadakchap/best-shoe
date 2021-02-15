import styled from 'styled-components';

export const CartPageWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    width: 90%;
    padding: 2em;
    gap: 1.5em;

    @media screen and (max-width: 991px){
        flex-direction: column;
        padding: 1em;
    }
`;

export const CartLeftPanel = styled.div`
    flex: 0.6;
    border-radius: 10px;
    overflow: hidden;
`;

export const CartRightPanel = styled.div`
    flex: 0.4;
`;

export const PriceTableWrapper = styled.div`
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    background: #fbfbfb;
    border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const CartListHeader = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.1rem;
    padding: 0.5em 1em;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
`;

export const CartListBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 5px;
`;

export const CartItem = styled.div`
    width: 100%;
    display: flex;
    padding: 0.5em 1em;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
`;

export const ItemImgWrapper = styled.div`
    width: 150px;
    height: 150px;
    background-color: #e7e7e7;
    border-radius: 10px;
    @media screen and (max-width: 467px){
        width: 100px;
        height: 100px;
    }
`;

export const ItemImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const ItemDetail = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.5em;
    margin-left: 1em;
`;

export const ItemName = styled.h2`
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 1.3rem;
    @media screen and (max-width: 467px){
        font-size: 1rem;
    }
`;

export const ItemCategory = styled.p`
    
    font-size: 0.7rem;
    color: #777;
    & span{
        background: #999;
        color: #fff;
        line-height: 0.7rem;
        padding: 0 5px;
        border-radius: 5px;
    }
`;

export const ItemPrice = styled.p`
    margin-top: 2.5em;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    @media screen and (max-width: 467px){
        margin-top: 0.5em;
    }
`;

export const RemoveButton = styled.div`
    background: transparent;
    outline: none;
    border: none;
    text-align: left;
    cursor: pointer;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 0.9rem;

    @media screen and (max-width: 467px){
        font-size: 0.8rem;
    }
`;

export const CartListFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0.5em 1em;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    
    @media screen and (max-width: 900px){
        justify-content: center;
    }
`;

export const PriceTable = styled.table`
    width: 100%;
    padding: 1em 2em;
    border-collapse:separate; 
    border-spacing:0 1em;
    word-break: break-word;

    & tr{
        margin: 1rem auto;
    }
    & tr.amount td{
        border-top: 1px dashed #777;
        border-bottom: 1px dashed #777;
        font-weight: 600;
        font-size: 1.2rem;
        line-height: 3rem;
    }
    & td:nth-child(2){
        text-align: right;
    }
    @media screen and (max-width: 768px){
        font-size: 0.7rem !important;
        padding: 1em;
    }
`;

export const HelpText = styled.p`
    margin-top: 2em;
    width: 100%;
    padding: 1em 3em;
    font-weight: 900;
    color: #c0c0c0;
    font-size: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CartContainer = styled.div`
    width: 90%;
    height: 400px;
    text-align: center;
    margin: 1em auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, .1);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const NoteText = styled.td`
    color: #999;
    font-size: 0.8rem;
`;