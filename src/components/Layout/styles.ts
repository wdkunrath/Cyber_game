import styled from 'styled-components';

export const Grid =  styled.div`
    display:grid;
    grid-template-rows: 130px auto;

    grid-template-areas:
    'MH'
    'CT';

    height: 100vh;

    /*
    * Layout
    * MH = Main Header
    * CT = Content
    */
`;