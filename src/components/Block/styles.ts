import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  transition: 0.5s;

  /* &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  } */
`;

export const Expanded = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1em;
  border-radius: 10px;
  transition: 0.5s;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const Collapsed = styled.div`
  padding: 1em;
  transition: 0.5s;
`;

export const TogglerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Toggler = styled.div`
  width: 1.5em;
  padding: 1em;
  cursor: pointer;
  display: flex;
  border-radius: 10px;
  transition: 0.5s;
  background-color: rgba(255, 255, 255, 0.1);
`;
