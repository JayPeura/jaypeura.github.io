import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarWrapper, SidebarLink } from './SidebarElements';

export const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>Tietoa minusta</SidebarLink>
                    <SidebarLink to="contactme" onClick={toggle}>Ota yhteyttä</SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>Projektit</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
