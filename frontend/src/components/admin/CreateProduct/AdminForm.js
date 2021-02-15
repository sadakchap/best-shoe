import styled from 'styled-components';

export const AdminFormWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export const AdminForm = styled.form`
    display: flex;
    /* width: 80%; */
    padding: 1em 3em;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 500px){
        padding: 1em 0.1em;
    }
`;

export const FormTextArea = styled.textarea`
    width: 100%;
    resize: none;
    font-family: 'Poppins', sans-serif;
    font-size: 0.8rem;
    font-weight: 300;
    color: grey;
    padding: 1rem;
    max-height: 200px;
    letter-spacing: 1px;
    background: #eee;
    border-radius: 20px;
    resize: none;
    outline: none;
    font-weight: 600;
    
`;

export const InputFormGroup = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;

export const InputSelect = styled.select`
    width: 96%;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    height: 40px;
    padding: 0 1rem;
`;