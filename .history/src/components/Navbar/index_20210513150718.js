import React from 'react';
import { GoThreeBars } from '@react-icons/all-files/go/GoThreeBars';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

export const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Jay Peura</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <GoThreeBars />
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
