import styled from 'styled-components';

export const Container =  styled.div`
    height: 100vh;    
    display: block;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;    
`;

export const Card = styled.div`    
    display:inline-table;
    margin-left:10px;
    max-width: 330px;
    width:24%;
    height:auto;
    max-height: 251px;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
    border-radius: 10px;

    > img{
        width:100%;
        height:auto;
    }    
`;