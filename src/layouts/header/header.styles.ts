import styled from "styled-components";

export const HeaderWrapper = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const HeaderLogo = styled.div`
  width: 100px;
`;

export const MenuItem = styled.a`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 35px;
  }
`;
export const MobileContainer = styled.div`
  position: relative;
`;
export const MobileHeaderWrapper = styled.div`
  padding: 50px 0;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const SidebarWrapper = styled.div<{ open: boolean }>`
  max-width: 320px;
  width: 100%;
  position: fixed;
  opacity: ${({ open }) => (open ? 1 : 0)};
  right: ${({ open }) => (open ? 0 : "-330px")};
  top: 0;
  height: 100%;
  z-index: 100;
  background-color: #000000d0;
  backdrop-filter: blur(10px);
  color: white;
  box-shadow: 0 0 5px 5px #00000030;
  padding: 100px 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  & > :not(:last-child) {
    margin-bottom: 30px;
    margin-right: 0;
  }
  svg {
    position: absolute;
    top: 30px;
    left: 40px;
    cursor: pointer;
  }
`;

export const SidebarOverlay = styled.div<{ open: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #00000080;
  z-index: 99;
  backdrop-filter: blur(5px);
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
`;
