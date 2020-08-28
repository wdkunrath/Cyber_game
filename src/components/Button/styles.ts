import styled from 'styled-components';
import IArrowRight from '../../assets/image/arrow-right.svg';

export const Container = styled.button`
    position:relative;
    width: 330px;
    height: 54px;
    text-transform: uppercase;
    text-align:left;
    font-style: italic;
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
    padding: 18px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.primary};

    transition: opacity .3s;

    &:hover{
        opacity: .7;
    }

    &:after{
        content:'';
        background-image: url(${IArrowRight});
        max-width: 25px;
        background-position: -5px -12.8px;
        width: 100%;
        background-size: cover;
        height: 18.05px;
        background-repeat: no-repeat;
        position: absolute;
        right: 3%;
    }
`;