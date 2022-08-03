import { Container } from "components";
import React from "react";
import { AboutImgWrapper, AboutTextWrapper, AboutWrapper } from "./styles";
import aboutImg from "assets/image/about.png";

const AboutToken: React.FC = () => {
  return (
    <Container>
      <AboutWrapper id="about">
        <AboutImgWrapper>
          <img src={aboutImg} alt="aboutimage" />
        </AboutImgWrapper>
        <AboutTextWrapper>
          <h3>We invented a new type of Crypto Currency</h3>
          <p>
            {
              "BigApple token is creat for all centralized and decentralized business to develop globally for easy business remittance with lowest fee charge and fast service ."
            }
          </p>
        </AboutTextWrapper>
      </AboutWrapper>
    </Container>
  );
};

export default AboutToken;
