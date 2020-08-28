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

    > div{
        width: 4;
        height: 4;
        border: 2px solid rgba(0, 0, 0, 0.1);
        border-left-color: white;
        border-radius: 50%;
        color: ${props => props.theme.colors.black};
        animation: ${spin} 1s linear infinite;
    }    
`;