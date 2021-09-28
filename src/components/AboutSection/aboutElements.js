import styled from "styled-components";
import {Link as LinkRouter} from 'react-router-dom';

export const AboutContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and ( max-width: 768px) {
        padding: 100px 0;
    }

`;

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const AboutRow = styled.div`
    display: flex;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const AboutColumn1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const AboutColumn2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 500px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px){
        max-width: 540px;
        padding-top: 0;
        padding-top: 130px;
    }
`;

export const AboutTopLine = styled.h1`
    color: #33A0FF;
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    letter-spaceing: 1.4px;
    text-transfrom: uppercase;
    margin-bottom: 16px;
`;

export const AboutHeading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#010606' : '#fff')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const AboutInfo = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')}
`;

export const AboutBtn = styled(LinkRouter)`
    border-radius: 50px;
    background: #33A0FF;
    white-space: nowrap;
    padding: 15px 45px;
    color: #010606;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        trasnistion: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

export const AboutImgWrap = styled.div`
    max-width 600px;
    height: 100%;
`;

export const AboutImg = styled.img`
    width: 100%;
    margin: 0 0 0px 0;
    padding-right: 0;
`;