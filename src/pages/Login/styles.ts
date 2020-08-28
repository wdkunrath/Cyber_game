import styled from 'styled-components';

export const Container =  styled.div`
    height: 100vh;    
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Logo =  styled.div`
    display:flex;
    align-content:center;
    margin-bottom: 23px;

    > img{
        width: 174px;
        height: 96px;
    }
`;

export const Form = styled.form`
    margin-top:23px;
`;