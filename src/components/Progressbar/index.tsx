import React from "react";
import { ProgressbarWrapper } from "./progressbar.styles";

interface ProgressbarProps {
  progress: number;
}

const Progressbar: React.FC<ProgressbarProps> = ({ progress }) => {
  return (
    <ProgressbarWrapper progress={progress}>
      <div>{progress}%</div>
    </ProgressbarWrapper>
  );
};

export default Progressbar;
