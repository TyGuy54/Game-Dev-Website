import {FaBars} from 'react-icons/fa'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';
import { useState } from 'react';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">TyGuy Studios</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="home">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="gamedungen">Game Dungen</NavLinks>
                        </NavItem>
                        {/* maybe have some sort of discoverthing but i dont know yet */}
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                       <NavBtnLink to='/signin'>Sign In</NavBtnLink> 
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
