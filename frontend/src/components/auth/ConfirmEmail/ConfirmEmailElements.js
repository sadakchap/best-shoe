import styled from 'styled-components';

export const ContainerWrapper = styled.div`
    width: 100%;
    /* text-align: center; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
`;
export const Content = styled.div`
    width: 80%;
    margin: 0 auto;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    padding: 2em 4em;
`;
export const HeaderText = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 2.3rem;
    font-weight: 600;
    color: '#00509d';
    margin: .5em auto;
    text-align: center;
    text-transform: capitalize;
`;

export const PText = styled.p`
    margin: 0 auto;
    padding: 1em;
    font-size: 0.9rem;
    text-align: center;
`;

export const InlineForm = styled.form`
    margin: .5em auto;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;