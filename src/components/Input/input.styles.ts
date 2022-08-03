import styled from "styled-components";

export const InputWrapper = styled.input<{ error?: boolean }>`
  background: #16161650;
  border-radius: 13px;
  outline: none;

  height: 62px;
  width: 100%;
  border: 1px solid ${({ error }) => (error ? "#f54c4c" : "#ffffff80")};
  color: white;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 18px;
  transition: all 0.3s;
  :focus {
    border: 1px solid white;
  }
`;

export const TextAreaWrapper = styled.textarea`
  background: #16161650;
  border-radius: 13px;
  resize: none;
  outline: none;
  height: 310px;
  width: 100%;
  border: 1px solid #ffffff80;
  color: white;
  padding: 20px 20px;
  box-sizing: border-box;
  font-size: 18px;
  transition: all 0.3s;
  :focus {
    border: 1px solid white;
  }
`;
