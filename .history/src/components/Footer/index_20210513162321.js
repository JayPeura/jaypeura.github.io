import React from 'react'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaTwitch } from '@react-icons/all-files/fa/FaTwitch'
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
                                <a target="_blank" href="https://github.com/JayPeura">GitHub</a>
                                    
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>jaypeura</SocialLogo>
                        <WebsiteRights>Jay Peura © {new Date().getFullYear()}</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.github.com/JayPeura" target="_blank" aria-label="GitHub">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com/in/jay-jenna-peura-0ba446185/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitch.tv/felinejay" target="_blank" aria-label="Twitch">
                                <FaTwitch />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
