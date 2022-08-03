import styled from "styled-components";

export const ButtonWrapper = styled.div`
  background: #1daeffff;
  border-radius: 5px;
  box-shadow: 0px 17px 33px rgba(29, 174, 255, 0.2);
  width: 100%;
  color: white;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 700;
  padding: 0px 25px;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  font-size: 12px;
  line-height: 30px;
  transition: all 0.3s;
  &.fit-content {
    width: fit-content;
  }
  &.border {
    border-radius: 45px;
  }
  :hover {
    background: #1daeffaa;
  }
  :active {
    background: #1daeff77;
  }
`;
