import React from 'react';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

export const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Jay Peura</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">Tietoa minusta</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contactme">Ota yhteyttä</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects">Projektit</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
