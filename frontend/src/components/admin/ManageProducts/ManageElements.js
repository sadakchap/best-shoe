import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 250px));
    grid-auto-rows: 250px;
    gap: 1em;
    margin: 2em auto;
    justify-content: center;
`;