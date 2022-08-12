import React from "react";
import { Button, Container } from "components";
import {
  HowitworksVideoWrapper,
  HowitworksWrapper,
  PlayWrapper,
} from "./styles";
import videoPoster from "assets/image/trade.png";
import { BsPlayFill } from "react-icons/bs";

const Howitworks: React.FC = () => {
  return (
    <Container>
      <HowitworksWrapper id="howitworks">
        <h1>How it works ?</h1>
        <HowitworksVideoWrapper>
          <video muted poster={videoPoster}>
            <source src="/Videos/video1.mp4" type="video/mp4" />
          </video>
          <PlayWrapper>
            <Button className="fit-content border video-play">
              <BsPlayFill color="#fff" size={50} />
            </Button>
          </PlayWrapper>
        </HowitworksVideoWrapper>
      </HowitworksWrapper>
    </Container>
  );
};

export default Howitworks;
