import React from "react";
import { Container } from "components";
import {
  ChartWrapper,
  ColorItem,
  ColorWrapper,
  GraphicWrapper,
  ImageWrapper,
  ManagementWrapper,
} from "./styles";
import graphic from "assets/image/Graphic.png";
import chart from "assets/image/chart-graphic.png";

const colorData = [
  "#268AFF",
  "#1ED6FF",
  "#5A3FFF",
  "#023E8A",
  "#3DFFDC",
  "#36F097",
];

const Management: React.FC = () => {
  return (
    <Container>
      <ManagementWrapper>
        <h1>Token Management</h1>
        <ImageWrapper>
          <GraphicWrapper>
            <img src={graphic} draggable={false} alt="graphic" />
          </GraphicWrapper>
          <ChartWrapper>
            <img src={chart} draggable={false} alt="chart" />
            <ColorWrapper>
              {colorData.map((item, key) => (
                <ColorItem key={key} color={item} />
              ))}
            </ColorWrapper>
          </ChartWrapper>
        </ImageWrapper>
      </ManagementWrapper>
    </Container>
  );
};

export default Management;
