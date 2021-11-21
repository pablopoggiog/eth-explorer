import styled from "styled-components";

export const Container = styled.div``;

export const Hash = styled.p`
  padding: 1em 0;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.5s;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
