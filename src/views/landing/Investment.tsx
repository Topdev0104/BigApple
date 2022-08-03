import React from "react";
import { Container } from "components";
import {
  InvestIcons,
  InvestIconWrapper,
  InvestmentImgWrapper,
  InvestmentText,
  InvestmentTextContainer,
  InvestmentWrapper,
} from "./styles";
import investmentImg from "assets/image/spicy.png";
import icon1 from "assets/image/inv-col-img1.png";
import icon2 from "assets/image/inv-col-img2.png";
import icon3 from "assets/image/inv-col-img3.png";
import icon4 from "assets/image/inv-col-img4.png";

const iconData = [
  { img: icon1 },
  { img: icon2 },
  { img: icon3 },
  { img: icon4 },
];

const Investment: React.FC = () => {
  return (
    <InvestmentWrapper id="tokenomics">
      <InvestmentTextContainer>
        <Container>
          <InvestmentText>
            <h3>BA token is our best investment</h3>
            <p>
              Investors can expect BigApple to rise back to its all-time high of
              Binance when the macroeconomic environment returns to some
              normalcy. If the crypto economy can rebound, investors should be
              confident that the previous all-time high is well within reach
              when considering the value and role Bigapple has in the crypto
              economy.
            </p>
            <InvestIcons>
              {iconData.map((item, key) => (
                <InvestIconWrapper key={key}>
                  <img src={item.img} alt="InvestIcons" />
                </InvestIconWrapper>
              ))}
            </InvestIcons>
          </InvestmentText>
        </Container>
      </InvestmentTextContainer>
      <InvestmentImgWrapper>
        <img src={investmentImg} alt="investmentImg" />
      </InvestmentImgWrapper>
    </InvestmentWrapper>
  );
};

export default Investment;
