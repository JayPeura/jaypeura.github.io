import React from 'react';
import { Nav, NavbarContainer, NavLogo } from './NavbarElements';

export const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        cat
                    </NavLogo>
                    <h1>Hallo</h1>
                </NavbarContainer>
            </Nav>
        </>
    );
};

