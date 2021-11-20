import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  transition: 0.5s;
  width: 100%;
  width: 70vw;
  margin: 1em 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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

export const ExpandButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 3.5em;
`;

export const ExpandButton = styled.div`
  display: flex;
  justify-content: center;
  width: 1.5em;
  padding: 1em;
  cursor: pointer;
  display: flex;
  border-radius: 10px;
  transition: 0.5s;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const Label = styled.h3``;

export const Field = styled.div``;

export const Input = styled.input``;

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;
