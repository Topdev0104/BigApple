import React from "react";
import { ButtonWrapper } from "./button.styles";

interface ButtonProps {
  className?: string;
  loading?: boolean;
  onClick?: VoidFunction;
}

const Button: React.FC<ButtonProps> = ({ children, loading, ...props }) => {
  return (
    <ButtonWrapper {...props}>
      {loading ? "Loading ... " : children}
    </ButtonWrapper>
  );
};

export default Button;
