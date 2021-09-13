import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import {Link as LinkRouter} from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #19191A;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    positon: absolute;
    top: 0.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    text-align: right;
`;

export const SideBarWrapper = styled.div`
    color: #fff;
`;

export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 80px);
    }
`;

export const SideBarLink = styled(LinkScroll)`
    display: flex;
    align-item: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    tranistion: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover{
        trasnistion: all 0.2s ease-in-out;
        color: #10bf71;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SideBarRoute = styled(LinkRouter)`
    border-radius: 50px;
    background: #10bf71;
    white-space: nowrap;
    padding: 16px 50px;
    color: #010606;
    font-size: 16px;
    font-weight: bold;
    font-size: 1.5rem;
    outline: none;
    border: none;
    margin-bottom: 50px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        trasnistion: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;