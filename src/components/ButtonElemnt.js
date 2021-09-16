import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
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
