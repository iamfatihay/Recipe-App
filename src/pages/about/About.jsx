import React from 'react';
import { AboutContainer, HeaderContainer, InfoContainer, StyledImage } from './AboutStyles';
import codingSvg from "../../assets/coding.svg";
import logo from "../../assets/logo.gif";

const About = () => {
  return (
    <div>

      <AboutContainer>
        <StyledImage src={codingSvg} />

        <HeaderContainer>
          <h1>
            About Software Developer <span>Fatih AY </span>
          </h1>
        </HeaderContainer>
        <InfoContainer>
          <div>
            <img src={logo} alt="logo" width="300px"/>
          </div>

          <a href="https://github.com/iamfatihay">GitHub</a>
          <a href="https://www.linkedin.com/in/fatih-ay1661/">LinkedIn</a>


          {/* whatsapp://tel:3216541234 */}
        </InfoContainer>
      </AboutContainer>
    </div>
  );
}

export default About