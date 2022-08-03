import styled from "styled-components";

export const ProgressbarWrapper = styled.div<{ progress: number }>`
  width: 100%;
  height: 12px;
  border-radius: 12px;
  background: rgba(29, 174, 255, 0.15);
  display: flex;
  div {
    height: 12px;
    width: ${({ progress }) => progress}%;
    border-radius: 12px;
    font-size: 10px;
    text-align: center;
    font-weight: 700;
    color: white;
    background: #1daeff;
  }
`;
