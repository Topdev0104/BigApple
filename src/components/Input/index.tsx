import React from "react";
import { InputWrapper, TextAreaWrapper } from "./input.styles";

interface InputProps {
  mode?: "input" | "textarea";
  onChange: any;
  className?: string;
  error?: string;
  [key: string]: unknown;
}

const Input: React.FC<InputProps> = ({ mode, error, ...props }) => {
  const Wrapper = mode === "textarea" ? TextArea : InputComponent;
  return <Wrapper {...props} />;
};

const InputComponent: React.FC<InputProps> = ({ error = "", ...props }) => {
  return <InputWrapper error={error !== ""} {...props} />;
};

const TextArea: React.FC<InputProps> = ({ ...props }) => {
  return <TextAreaWrapper {...props} />;
};

export default Input;
