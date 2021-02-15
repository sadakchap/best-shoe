import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 2em;
    padding: 1rem 3rem;
    position: relative;

    @media screen and (max-width: 768px){
        margin: 0 auto;
        padding: 1rem 2rem;
    }
`;

export const ContainerFluid = styled.div`
    margin: 0;
    padding: 0;
`;