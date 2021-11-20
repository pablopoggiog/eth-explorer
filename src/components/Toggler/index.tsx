import { FunctionComponent } from "react";
import { Button } from "src/components";
import { Container } from "./styles";

interface TogglerProps {
  toggle: () => void;
  text: string;
}

export const Toggler: FunctionComponent<TogglerProps> = ({
  toggle,
  text,
}) => (
  <Container>
    <Button onClick={toggle}>{text}</Button>
  </Container>
);
