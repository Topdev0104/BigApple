import React from "react";
import { Container } from "components";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderWrapper,
  MenuItem,
} from "./header.styles";
import MobileHeader from "./MobileHeader";

export const menuData = [
  { label: "About us", path: "about" },
  { label: "Tokenomics", path: "tokenomics" },
  { label: "Contact us", path: "contact" },
  { label: "Feature", path: "feature" },
  { label: "Partnership", path: "partnership" },
];

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderLogo>
          <img src={"/image/apple.png"} alt="" width="100px" />
        </HeaderLogo>
        <HeaderWrapper>
          {menuData.map((menu, key) => (
            <MenuItem key={key} href={`#${menu.path}`}>
              {menu.label}
            </MenuItem>
          ))}
        </HeaderWrapper>
      </HeaderContainer>
      <MobileHeader />
    </Container>
  );
};

export default Header;
