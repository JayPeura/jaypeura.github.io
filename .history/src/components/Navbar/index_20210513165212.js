import React, {useState, useEffect} from 'react';
import { GoThreeBars } from '@react-icons/all-files/go/GoThreeBars';
import { IconContext } from '@react-icons/all-files/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

export const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

const changeNav = ()=> {
    if(window.scrollY >= 80) {
        setScrollNav(true)
    } else {
        setScrollNav(false)
    }
}

useEffect(() => {
    window.addEventListener('scroll', changeNav)

}, [])

    return (
        <>
            <Nav scrollNav={scrollNav}>
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
