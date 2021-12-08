import React from 'react'
import Video from '../../videos/homevideo.mp4';
import { HeroContainer, HeroBG, VideoBG, HeroContent, HeroH1, HeroP } from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroBG>
                <VideoBG autoPlay loop muted src={Video} type='video/mp4' >

                </VideoBG>
            </HeroBG>
            <HeroContent>
                <HeroH1>Hei, olen Jay</HeroH1>
                <HeroP>Ja tässä ovat nettisivuni.</HeroP>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection
