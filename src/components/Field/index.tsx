import { FunctionComponent, useRef } from "react";
import { useAlert } from "react-alert";
import styled from "styled-components";
import { Button } from "src/components";
import { copyToClipboard } from "src/utils";
import copyIcon from "src/assets/copy.svg";

interface FieldProps {
  label: string;
  text: string;
}

export const Field: FunctionComponent<FieldProps> = ({ label, text }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const alert = useAlert();

  const handleCopyToClipboard = () =>
    copyToClipboard(inputRef.current, alert.show);

  return (
    <Container>
      <Label htmlFor={label}>{label}</Label>
      <InputContainer>
        <Input id={label} readOnly ref={inputRef} value={text} />
        <Button onClick={handleCopyToClipboard}>
          <Icon src={copyIcon} />
        </Button>
      </InputContainer>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4em;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1em;
  border: 1px solid white;
  border-radius: 10px;
  padding: 0 1em;
`;

export const Input = styled.input`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background: transparent;
  border: none;
  color: white;
  width: 80%;

  &:focus {
    text-decoration: none;
    outline: none;
    cursor: auto;
  }
`;

export const Icon = styled.img`
  width: 1em;
  height: 1em;
`;

export const Label = styled.label`
  font-size: 1.1em;
  font-weight: 500;
`;
