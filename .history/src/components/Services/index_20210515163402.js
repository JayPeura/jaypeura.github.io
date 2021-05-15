import React from 'react'
import Icon1 from '../../images/calculator.svg'
import Icon2 from '../../images/robot.svg'
import Icon3 from '../../images/weather.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesIcon, ServicesCard, ServicesH2} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Projektit</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} onClick={() => {window.location.href="https://github.com/jaypeura/calculator/"}}/>
                    <ServicesH2>JavaScript calculator</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} onClick={() => {window.location.href="https://github.com/jaypeura/valeriebot/"}}/>
                    <ServicesH2>Discord.js bot</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} onClick={() => {window.location.href="https://jaypeura.github.io/weather/"}}/>
                    <ServicesH2>Weather-app</ServicesH2>
                </ServicesCard>
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services
