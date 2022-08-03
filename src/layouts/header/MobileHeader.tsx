import React, { useState } from "react";
import {
  MenuItem,
  MobileContainer,
  MobileHeaderWrapper,
  SidebarOverlay,
  SidebarWrapper,
} from "./header.styles";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { menuData } from ".";

const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <MobileContainer>
      <MobileHeaderWrapper>
        <AiOutlineMenuUnfold
          color="white"
          size={35}
          onClick={() => setOpen(true)}
        />
      </MobileHeaderWrapper>
      <SidebarWrapper open={open}>
        <AiOutlineClose
          size={30}
          color="white"
          onClick={() => setOpen(false)}
        />
        {menuData.map((menu, key) => (
          <MenuItem key={key} href={`#${menu.path}`}>
            {menu.label}
          </MenuItem>
        ))}
      </SidebarWrapper>
      <SidebarOverlay open={open} onClick={() => setOpen(false)} />
    </MobileContainer>
  );
};

export default MobileHeader;
