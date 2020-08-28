import styled from 'styled-components';

export const Grid =  styled.div`
    grid-area: MH;
    padding-top: 53px;
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    align-content:center;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width:768px){
        padding: 0 60px;
    }
`;

export const Profile =  styled.div`
    margin-bottom: 5px;
`;

export const Title =  styled.h5`
    margin: 0 5px;
    font-size: 16px;
    display: inline-block;
    vertical-align: middle;

    > span a{
        cursor: pointer;
    }
`;

export const LogoCircle =  styled.img`
    max-width: 70px;
    max-height: 70px;
    width: 100%;
    height: auto;
    margin: 0 5px;
    display: inline-block;
    vertical-align: middle;
`;

export const Logo =  styled.img`
    max-width: 138px;
    width: 100%;
    height: auto;
    margin: 0 5px;
    display: inline-block;
    vertical-align: middle;

    @media (max-width:425px){
        max-width: 128px; 
    }
`;
