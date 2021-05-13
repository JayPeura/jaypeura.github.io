import React from 'react'

const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroBG>
                <VideoBG autoPlay loop muted src={Video} type='video/mp4' >

                </VideoBG>
            </HeroBG>
            
        </HeroContainer>
    )
}

export default HeroSection
