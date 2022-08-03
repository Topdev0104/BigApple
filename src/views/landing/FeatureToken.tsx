import React from "react";
import {
  FeatureContainer,
  FeatureImgWrapper,
  FeatureText,
  FeatureTextContainer,
  FeatureTextWrapper,
} from "./styles";
import featureImg from "assets/image/Frame.png";
import { Button, Container } from "components";

const FeatureToken: React.FC = () => {
  return (
    <FeatureContainer id="feature">
      <FeatureImgWrapper>
        <img src={featureImg} alt="investmentImg" />
      </FeatureImgWrapper>
      <FeatureTextContainer>
        <Container>
          <FeatureTextWrapper>
            <FeatureText>
              <h2>Feature of BigAppe</h2>
              <p>
                {
                  "As a crypto price become more stabile, crypto is the top volatile market in history .BigApple it has limited supply token and it’s demand is increasing it can reach $3 to 10 in year 22-23."
                }
              </p>
              <Button className="fit-content border">Get Tokens</Button>
            </FeatureText>
          </FeatureTextWrapper>
        </Container>
      </FeatureTextContainer>
    </FeatureContainer>
  );
};

export default FeatureToken;
