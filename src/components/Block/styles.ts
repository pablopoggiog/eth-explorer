import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      `;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1em;
  border-radius: 10px;
  transition: 0.5s;
  width: 70vw;
  margin: 1em 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  animation: ${fadeIn} 1.5s ease 1;
`;

export const Expanded = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1em;
  width: 100%;
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
