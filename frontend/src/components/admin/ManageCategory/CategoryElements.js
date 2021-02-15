import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CategoryWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (max-width: 991px){
        justify-content: center;
    }
`;

export const CategoryCardWrapper = styled.div`
    max-width: 300px;
    width: 100%;
    margin: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #17212d;
    border-radius: 4px;
    border: 1px solid rgba(237, 237, 237, 0.2);
`;

export const CategoryCardTitle = styled.h2`
    width: 100%;
    color: #ddd;
    font-weight: 500;
    font-size: 1.1rem;
    padding: 0.5em 0;
    text-align: center;
    border-bottom: 1px solid rgba(237, 237, 237, 0.2);
`;

export const CategoryCardActionDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CategoryCardAction = styled(Link)`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ccc;
    padding: 0.5em 0;
    border-right: 1px solid rgba(237, 237, 237, 0.1);
    font-size: 0.9rem;
`;