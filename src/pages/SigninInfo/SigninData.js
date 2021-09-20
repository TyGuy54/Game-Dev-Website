import styled from "styled-components";

export const SigninContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
    margin-top: 210px;

    @media screen and ( max-width: 768px) {
        padding: 100px 0;
        margin-top: 100px
    }

`;

export const SignInName = styled.h1`
    display: grid;
    z-index: 1;
    width: 100%
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const SignInButton = styled.button`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#33A0FF' : '#33A0FF')};
    white-space: nowrap;
    padding: ${(big) => (big ? '14px 48px' : '12px 30px')};
    color: ${(dark) => (dark ? '#010606' : '#fff')};
    font-size: ${(fontBig) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' :'red')};
    }
`;
