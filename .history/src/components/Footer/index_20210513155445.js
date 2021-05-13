import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Thats's a wrap!</FooterLinkTitle>
                                <FooterLink to="about">Tietoa minusta</FooterLink>
                                <FooterLink to="contactme">Ota yhteyttä</FooterLink>
                                <FooterLink to="projects">Projektit</FooterLink>      
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Sosiaalinen media</FooterLinkTitle>
                                <a target="_blank" href="https://www.linkedin.com/in/jay-jenna-peura-0ba446185/">LinkedIn</a>
                                <a target="_blank" href="https://github.com/JayPeura">Github</a>
                                    
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
