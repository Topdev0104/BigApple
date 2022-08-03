import React from "react";
import { Container } from "components";
import {
  CommunityCardWrapper,
  CommunityIcon,
  CommunityListWrapper,
  CommunityWrapper,
} from "./styles";
import twitterIcon from "assets/image/twitter.png";
import discordIcon from "assets/image/discord.png";
import instagramIcon from "assets/image/instgram.png";

const communityData = [
  { icon: twitterIcon, label: "Twitter", path: "" },
  { icon: discordIcon, label: "Discord", path: "" },
  { icon: instagramIcon, label: "Instagram", path: "" },
];

const Community: React.FC = () => {
  return (
    <Container>
      <CommunityWrapper id="partnership">
        <h1>Join Community</h1>
        <CommunityListWrapper>
          {communityData.map((item, key) => (
            <CommunityCardWrapper key={key}>
              <CommunityIcon>
                <img src={item.icon} alt="community" />
              </CommunityIcon>
              <h3>{item.label}</h3>
            </CommunityCardWrapper>
          ))}
        </CommunityListWrapper>
      </CommunityWrapper>
    </Container>
  );
};

export default Community;
