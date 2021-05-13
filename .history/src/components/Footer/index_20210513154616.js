import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink}

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
                                <FooterLink to="contactme">LinkedIn</FooterLink>
                                <FooterLink to="projects">Github</FooterLink>      
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
