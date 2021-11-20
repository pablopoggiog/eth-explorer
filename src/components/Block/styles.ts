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
  margin: 1em 0;
  animation: ${fadeIn} 1.5s ease 1;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Expanded = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1em;
  width: 70vw;
  border-radius: 10px;
  transition: 0.5s;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const Collapsed = styled.div`
  padding: 1em;
  width: 70vw;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2em;
  overflow: hidden;
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

export const TimeAgo = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.8em;
  border-radius: 10px;
  font-size: 0.8em;
`;

export const Hash = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
