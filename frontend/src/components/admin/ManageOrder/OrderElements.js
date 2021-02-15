import styled from 'styled-components';
import { darken, lighten } from 'polished'

export const OrderTable = styled.table`
    margin-top: 2em;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
    background: #17212d;

    & th, td {
        text-align: center;
        padding: 8px;
        font-size: 0.9rem;
    }

    thead{
        background-color: ${darken(0.1, '#17212d')};
    }

    & tr:nth-child(even){
        background-color: ${lighten(0.1, '#17212d')};
    }
`;