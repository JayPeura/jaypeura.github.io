import React from 'react'
import Video from '../../videos/homevideo.mp4';
import { HeroContainer, HeroBG, VideoBG } from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroBG>
                <VideoBG autoPlay loop muted src={Video} type='video/mp4' >

                </VideoBG>
            </HeroBG>
            <HeroContent>
                <HeroH1>Welcome to my website</HeroH1>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection
