import styled from "styled-components";
import bgImg from "assets/image/background.png";

export const IntroWrapper = styled.div`
  background: url(${bgImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  position: relative;
  ::after {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    background-color: rgba(0, 14, 36, 0.5);
    width: 100%;
    height: 100%;
  }
  ::before {
    content: "";
    left: 0;
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 146px;
    background: linear-gradient(180deg, rgba(0, 14, 36, 0) 0%, #000e24 100%);
  }
`;
export const TokenText = styled.div`
  text-align: center;
`;
export const AddressText = styled.div`
  margin-top: 8px;
  @media screen and (max-width: 500px) {
    text-align: center;
    overflow-wrap: break-word;
  }
`;

export const IntroContent = styled.div`
  position: relative;
  z-index: 1;
`;

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: calc(100vh - 124px);
  padding-bottom: 50px;
  width: 100%;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const IntroTextWrapper = styled.div`
  color: white;
  h1 {
    font-weight: 800;
    font-size: 64px;
    line-height: 78px;
    margin: 0;
    margin-bottom: 50px;
  }
  p {
    max-width: 508px;
    width: 100%;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    margin: 0;
  }
  @media screen and (max-width: 1200px) {
    h1 {
      font-size: 55px;
    }
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 30px;
    text-align: center;
    p {
      max-width: 100%;
    }
  }
`;

export const IntroCarWrapper = styled.div`
  background: rgba(0, 1, 2, 0.5);
  border-radius: 15px;
  max-width: 458px;
  width: 100%;
  padding: 38px 35px;
  box-sizing: border-box;
  color: #ffffff;
  span {
    margin-top: 8px;
    margin-bottom: 20px;
  }
  p {
    margin: 0;
    font-weight: 800;
    font-size: 32px;
    line-height: 39px;
    margin-bottom: 30px;
  }
  .intro-form-button {
    margin-top: 20px;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ErrorNotify = styled.div<{ visible: boolean }>`
  width: 100%;
  margin-bottom: ${({ visible }) => (visible ? 20 : 0)}px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  height: ${({ visible }) => (visible ? 50 : 0)}px;
  background-color: #f54c4c;
  border-radius: 5px;
  display: flex;
  padding: 0 20px;
  font-size: 12px;
  box-sizing: border-box;
  align-items: center;
`;

export const IntroActionWrapper = styled.div`
  display: flex;
  margin-top: 88px;
  .play {
    width: 45px;
    padding: 0;
    margin-left: 35px;
    margin-right: 15px;
  }
  @media screen and (max-width: 1024px) {
    justify-content: center;
    margin-top: 30px;
  }
`;

export const ActionText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  text-align: left;
  h6 {
    margin: 0;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }
  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
  }
`;

export const AboutWrapper = styled.div`
  padding-top: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    padding-top: 50px;
  }
`;

export const AboutImgWrapper = styled.div`
  width: 50%;
  animation: bounce 3s ease-in-out infinite;
  @keyframes bounce {
    0% {
      transform: translateY(-15px);
    }
    50% {
      transform: translateY(15px);
    }
    100% {
      transform: translateY(-15px);
    }
  }
  img {
    transform: translateX(-10%);
    width: 110%;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    img {
      transform: translateX(0);
      width: 100%;
    }
  }
`;

export const AboutTextWrapper = styled.div`
  width: 50%;
  color: white;
  & > :not(:last-child) {
    margin-bottom: 30px;
  }
  h3,
  p {
    margin: 0;
  }
  h3 {
    font-weight: 800;
    font-size: 44px;
    line-height: 54px;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    h3 {
      font-size: 35px;
    }
  }
`;

export const InvestmentWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding-top: 100px;
    align-items: flex-end;
  }
`;

export const InvestmentTextContainer = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  @media screen and (max-width: 1024px) {
    position: static;
    order: 2;
  }
`;

export const InvestmentImgWrapper = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
    img {
      width: 100%;
    }
  }
`;

export const InvestmentText = styled.div`
  width: 100%;
  max-width: 728px;
  color: white;
  h3,
  p {
    margin: 0;
  }
  h3 {
    font-weight: 800;
    font-size: 44px;
    line-height: 54px;
    margin-bottom: 45px;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 1024px) {
    max-width: 100%;
    margin-top: 50px;
  }
  @media screen and (max-width: 768px) {
    h3 {
      font-size: 35px;
    }
  }
`;

export const InvestIcons = styled.div`
  display: flex;
  margin-top: 68px;
  align-items: center;
  & > :not(:last-child) {
    margin-right: 84px;
  }
  @media screen and (max-width: 768px) {
    & > :not(:last-child) {
      margin-right: 50px;
    }
  }
  @media screen and (max-width: 450px) {
    & > :not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export const InvestIconWrapper = styled.div`
  width: 60px;
  height: 60px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ManagementWrapper = styled.div`
  padding-top: 50px;
  width: 100%;
  h1 {
    color: white;
    text-align: center;
    font-weight: 800;
    font-size: 44px;
    line-height: 54px;
    margin: 0;
  }
  @media screen and (max-width: 1024px) {
    padding-top: 150px;
  }
  @media screen and (max-width: 768px) {
    padding-top: 100px;
    h1 {
      font-size: 35px;
    }
  }
`;

export const GraphicWrapper = styled.div`
  width: 50%;
  img {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 500px;
    margin-bottom: 30px;
  }
`;

export const ChartWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  img {
    width: 60%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 500px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 50px;
  }
`;

export const ColorWrapper = styled.div`
  margin-left: 90px;
  & > :not(:last-child) {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 500px) {
    margin-left: 50px;
  }
`;

export const ColorItem = styled.div<{ color: string }>`
  width: 15px;
  height: 15px;
  border-radius: 3px;
  background-color: ${({ color }) => color};
`;

export const FeatureContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 150px;
  @media screen and (max-width: 1024px) {
    padding-top: 0;
  }
  @media screen and (max-width: 768px) {
    padding-top: 100px;
  }
`;

export const FeatureImgWrapper = styled.div`
  @media screen and (max-width: 1024px) {
    width: 100%;
    contain: content;
  }
  @media screen and (max-width: 768px) {
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export const FeatureTextContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  left: 0;
  @media screen and (max-width: 768px) {
    position: relative;
    padding-bottom: 50px;
  }
`;

export const FeatureTextWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const FeatureText = styled.div`
  color: white;
  max-width: 728px;
  width: 100%;
  h2,
  p {
    margin: 0;
  }
  h2 {
    font-weight: 800;
    font-size: 44px;
    margin-bottom: 34px;
    line-height: 54px;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 20px;
  }
  .fit-content {
    margin-top: 44px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 35px;
    }
  }
`;

export const HowitworksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
  width: 100%;
  h1 {
    font-weight: 800;
    font-size: 44px;
    line-height: 54px;
    color: white;
    margin: 0;
    margin-bottom: 80px;
  }
  @media screen and (max-width: 1024px) {
    padding-top: 50px;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 35px;
    }
  }
`;

export const HowitworksVideoWrapper = styled.div`
  position: relative;
  max-width: 892px;
  width: 100%;
  filter: drop-shadow(0px 17px 45px rgba(29, 174, 255, 0.25));
  video {
    width: 100%;
  }
`;

export const PlayWrapper = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 14, 36, 0.5);
  .video-play {
    padding: 0;
    width: 87px;
    height: 87px;
  }
`;

export const CommunityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
  padding-bottom: 10px;
  width: 100%;
  h1 {
    font-weight: 800;
    font-size: 44px;
    line-height: 54px;
    color: white;
    margin-bottom: 100px;
  }
  @media screen and (max-width: 1024px) {
    padding-top: 50px;
    h1 {
      margin-bottom: 50px;
    }
  }
`;

export const CommunityListWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  & > :not(:last-child) {
    margin-right: 5%;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    & > :not(:last-child) {
      margin-right: 0;
      margin-bottom: 30px;
    }
    align-items: center;
  }
`;

export const CommunityCardWrapper = styled.div`
  max-width: 320px;
  width: 100%;
  height: 320px;
  background: #000e24;
  box-shadow: 0px 2px 4px 2px rgba(29, 174, 255, 0.25);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  h3 {
    margin-top: -20px;
    font-weight: 700;
    font-size: 40px;
    line-height: 49px;
    color: white;
  }
  @media screen and (max-width: 768px) {
    max-width: 200px;
    height: 200px;
    img {
      width: 120px;
    }
    h3 {
      font-size: 25px;
    }
    justify-content: flex-end;
  }
  @media screen and (max-width: 500px) {
    max-width: 320px;
    height: 320px;
    justify-content: center;
    h3 {
      font-size: 40px;
    }
    img {
      width: auto;
    }
  }
`;

export const CommunityIcon = styled.div``;

export const ContactSectionWrapper = styled.div`
  background: linear-gradient(180deg, #000e24 0%, #000000 100%);
  padding: 200px 0 100px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 50px 0 50px;
  }
`;

export const ContactImgWrapper = styled.div``;

export const ContactFormWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
`;

export const ContactFormContainer = styled.div`
  color: white;
  max-width: 733px;
  width: 100%;
  .fit-content {
    margin-top: 50px;
  }
  h2,
  p {
    margin: 0;
  }
  h2 {
    font-weight: 800;
    font-size: 44px;
    line-height: 54px;
    margin-bottom: 30px;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
  }
  .contact-input {
    margin: 46px 0 30px;
  }
`;
