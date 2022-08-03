import React from "react";
import {
  AboutToken,
  Community,
  Contact,
  FeatureToken,
  Howitworks,
  IntroToken,
  Investment,
  Management,
} from "views/landing";
import { LandingPageWrapper } from "./landing.styles";

const LandingPage: React.FC = () => {
  return (
    <LandingPageWrapper>
      <IntroToken />
      <AboutToken />
      <Investment />
      <Management />
      <FeatureToken />
      <Howitworks />
      <Community />
      <Contact />
    </LandingPageWrapper>
  );
};

export default LandingPage;
