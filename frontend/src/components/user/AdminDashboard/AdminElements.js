import styled from 'styled-components';

export const OrderChartWrapper = styled.div`
    margin-top: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    background-color: #17212d;
    border-radius: 5px;
    padding-top: 2em;

    @media screen and (max-width: 768px){
        flex-direction: column;

        &:nth-child(4){
            flex-direction: column-reverse;
        }

    }

`;

export const ChartWrapper = styled.div`
    position: relative;
    height: 450px;
    width: 65%;
    border-right: 1px solid #aaa;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

export const ChartTitle = styled.h2`
    position: absolute;
    top: -5%;
    left: 5%;
    font-size: 1.2rem;
    font-weight: 500;
    color: #ddd;
`;

export const CardsWrapper = styled.div`
    height: 100%;
    width: 35%;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

export const Card = styled.div`
    position: relative;
    border-radius: 4px;
    padding: 1em;
    margin: 1em;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 5px rgba(237, 237, 237, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CardDetail = styled.div`
    & h3{
        font-size: 1.2rem;
        font-weight: 400;
    }

    & p{
        font-size: 1.5rem;
        font-weight: 600;
    }
    & small{
        font-size: 0.6rem;
        font-weight: 400;
        font-family: 'Raleway', sans-serif;
        letter-spacing: 1px;
    }
`;