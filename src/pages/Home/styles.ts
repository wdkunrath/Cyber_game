import styled from 'styled-components';

export const Container =  styled.div`
    height: 100vh;    
    display: block;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5%;

    > h1{
        text-align: center;
        color: ${ props => props.theme.colors.primary};
    }
`;