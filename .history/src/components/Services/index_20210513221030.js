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
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2 to={jscalc}>JavaScript calculator</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2 to={discbot}>Discord.js bot</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2 href="weather.html">Weather-app</ServicesH2>
                </ServicesCard>
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services
