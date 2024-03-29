import styled from "styled-components";

interface ButtonProps {
  borderRadius?: string;
  disabled?: boolean;
}

export const Button = styled.button<ButtonProps>`
  border-radius: ${({ borderRadius }) => borderRadius ?? "5px"};
  padding: 0.4em;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: 0.6s;
  text-align: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  margin: 1em 0;

  &:hover {
    background-color: #3ca2c3;
    color: white;
    transform: scale(1.01);
  }

  &:focus {
    outline: 0;
  }
`;
