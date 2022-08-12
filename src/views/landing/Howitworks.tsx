import React, { useRef } from "react";
import { Button, Container } from "components";
import {
  HowitworksVideoWrapper,
  HowitworksWrapper,
  PlayWrapper,
} from "./styles";
import { BsPlayFill, BsFillPauseFill } from "react-icons/bs";
import useVideoPlayer from "context/videoPlayer";
import video from "assets/video/bigapple.mp4";
const Howitworks: React.FC = () => {
  const videoElement = useRef(null);
  const { playerState, togglePlay, handleOnTimeUpdate } =
    useVideoPlayer(videoElement);
  return (
    <Container>
      <HowitworksWrapper id="howitworks">
        <h1>How it works ?</h1>
        <HowitworksVideoWrapper>
          <video
            style={{ width: "100%" }}
            src={video}
            ref={videoElement}
            onTimeUpdate={handleOnTimeUpdate}
          />
          <PlayWrapper onClick={togglePlay}>
            <Button className="fit-content border video-play">
              {!playerState.isPlaying ? (
                <BsPlayFill color="#fff" size={50} />
              ) : (
                <BsFillPauseFill color="#fff" size={50} />
              )}
            </Button>
          </PlayWrapper>
        </HowitworksVideoWrapper>
      </HowitworksWrapper>
    </Container>
  );
};

export default Howitworks;
