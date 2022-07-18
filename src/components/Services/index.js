import React from "react";
import Icon1 from "../../images/calculator.svg";
import Icon2 from "../../images/robot.svg";
import Icon3 from "../../images/weather.svg";
import Icon4 from "../../images/gamepad.svg";
import Icon5 from "../../images/website.png";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesIcon,
  ServicesCard,
  ServicesH2,
} from "./ServicesElements";
import { Button } from "../ButtonElements";

const Services = ({ primary, dark, dark2 }) => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Projektit</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon
            src={Icon1}
            onClick={() => {
              window.location.href = "https://jaypeura.github.io/calculator/";
            }}
          />
          <ServicesH2>React calculator</ServicesH2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            src={Icon2}
            onClick={() => {
              window.location.href = "https://github.com/jaypeura/valeriebot/";
            }}
          />
          <ServicesH2>Discord.js bot</ServicesH2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            src={Icon3}
            onClick={() => {
              window.location.href = "https://jaypeura.github.io/weather/";
            }}
          />
          <ServicesH2>Weather-app</ServicesH2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            src={Icon4}
            onClick={() => {
              window.location.href = "https://jaypeura.github.io/AvoiderGame/";
            }}
          />
          <ServicesH2>Avoider Game</ServicesH2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            src={Icon5}
            onClick={() => {
              window.location.href = "https://jaypeura.github.io/Vue-website/";
            }}
          />
          <ServicesH2>Vue website</ServicesH2>
        </ServicesCard>
      </ServicesWrapper>
      <Button
        to="home"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-80}
        primary={primary ? 1 : 0}
        dark={dark ? 1 : 0}
        dark2={dark2 ? 1 : 0}
      >
        Takaisin ylös
      </Button>
    </ServicesContainer>
  );
};

export default Services;
