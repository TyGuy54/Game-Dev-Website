import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SideBarWrapper,
    SideBarLink,
    SideBarMenu,
    SideBtnWrap,
    SideBarRoute
 } from './SideBarElements'

const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" onClick={toggle}>
                        About
                    </SideBarLink>
                    <SideBarLink to="discover" onClick={toggle}>
                        Discover
                    </SideBarLink>
                    <SideBarLink to="servises" onClick={toggle}>
                        Services
                    </SideBarLink>
                    <SideBarLink to="signup" onClick={toggle}>
                        Sign Up
                    </SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute to="/signin">Sign In</SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SidebarContainer>
    )
}

export default SideBar
