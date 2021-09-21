import styled from "styled-components";

export const SigninContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
    margin-top: 0px;
    padding-top: 0px;
    padding-bottom: 107px;

    @media screen and ( max-width: 768px) {
        padding: 100px 0;
        margin-top: 0px;
        padding-top: 100px;
        padding-bottom: 500px;
    }

`;

export const TyguyLogo = styled.h1`
    text-align: center;
    font-weight: bold;
`;

export const SignInForom = styled.div`
    border-radius: 40px;
    background-color: #000;
    padding: 100px;
    box-shadow: 0px 0px 50px #33a0ff;
    margin-top: 30px;
    margin-bottom: 50px;
    margin-left: 200px;
    margin-right: 200px;
`;

// export const TestBox = styled.div`
// box-shadow: 0px 0px 50px #33a0ff inset;
// `;

export const SignInName = styled.div`
    display: grid;
    z-index: 1;
    width: 100%
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const SignInPass = styled.div`
    display: grid;
    z-index: 1;
    width: 100%
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 70px;
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
        background: ${({primary}) => (primary ? '#fff' :'#fff')};
    }
`;
