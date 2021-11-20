import { FunctionComponent, useRef } from "react";
import { useAlert } from "react-alert";
import styled from "styled-components";
import { Button } from "src/components";
import { copyToClipboard } from "src/utils";
import copyIcon from "src/assets/copy.svg";

interface FieldProps {
  text: string;
}

export const Field: FunctionComponent<FieldProps> = ({ text }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const alert = useAlert();

  const handleCopyToClipboard = () =>
    copyToClipboard(inputRef.current, alert.show);

  return (
    <FieldContainer>
      <FieldBase readOnly ref={inputRef} value={text} />
      <Button onClick={handleCopyToClipboard}>
        <Icon src={copyIcon} />
      </Button>
    </FieldContainer>
  );
};

export const FieldContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1em;
  border: 1px solid white;
  border-radius: 10px;
  padding: 0 1em;
`;

export const FieldBase = styled.input`
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
