import styled, { keyframes } from 'styled-components';

export const spin = keyframes`
    to { 
        transform: rotate(360deg);
    }
`;

export const LoaderLogin =  styled.div`
    outline: none;
    cursor: default;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.primary};     
`;