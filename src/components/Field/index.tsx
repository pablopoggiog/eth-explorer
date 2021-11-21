import { FunctionComponent, FormEvent, useRef } from "react";
import { useAlert } from "react-alert";
import styled from "styled-components";
import { Button } from "src/components";
import { copyToClipboard } from "src/utils";
import copyIcon from "src/assets/copy.svg";

interface FieldProps {
  label: string;
  text: string;
  onChange?: (event: FormEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  disabled?: boolean;
}

export const Field: FunctionComponent<FieldProps> = ({
  label,
  text,
  onChange,
  readOnly = true,
  disabled = true,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const alert = useAlert();

  const handleCopyToClipboard = () => copyToClipboard(text, alert.show);

  return (
    <Container>
      <Label htmlFor={label}>{label}</Label>
      <InputContainer disabled={disabled}>
        <Input
          id={label}
          readOnly={readOnly}
          disabled={disabled}
          onChange={onChange}
          ref={inputRef}
          value={text}
        />
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

interface InputContainerProps {
  disabled: boolean;
}
export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1em;
  border: 1px solid white;
  border-radius: 10px;
  padding: 0 1em;
  background-color: ${({ disabled }) =>
    disabled ? "transparent" : "rgba(255, 255, 255, 0.1)"};
`;

export const Input = styled.input`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background: transparent;
  border: none;
  color: white;
  width: 80%;
  height: 3em;

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
