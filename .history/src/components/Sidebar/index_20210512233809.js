import React from 'react'
import { SidebarContainer, Icon, CloseIcon } from './SidebarElements';

export const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">About</SidebarLink>
                    <SidebarLink to="contact">Contact me</SidebarLink>
                    <SidebarLink to="projects">Projects</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
