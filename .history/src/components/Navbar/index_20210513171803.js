import React, {useState, useEffect} from 'react';
import { GoThreeBars } from '@react-icons/all-files/go/GoThreeBars';
import { IconContext } from '@react-icons/all-files/lib'
import { animateScroll as scroll } from 'react-scroll'
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

}, []);

const toggleHome = () => {
    scroll.scrollToTop()
}

    return (
        <>
        <IconContext.Provider value={{ color: 'white' }}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>Jay Peura</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <GoThreeBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">Tietoa minusta</NavLinks>
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
        </IconContext.Provider>
        </>
    );
};

export default Navbar;
