import styled from 'styled-components';

export const ProductCardsWrapper = styled.div`
    margin: 0 auto;
    width: 95%;
    padding: 2em;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 270px));
    gap: 2.5rem 2rem;
    grid-auto-rows: auto;
    justify-content: center;
`;