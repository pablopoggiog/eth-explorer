import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

export const HeaderContainer = styled.div`
  margin: 3em 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  height: 200px;
`;

export const Image = styled.img`
  height: 100%;
  position: absolute;
  z-index: 0;
`;

export const Text = styled.h1`
  text-shadow: 1px 1px 5px white;
  text-align: center;
  z-index: 1;
  position: absolute;
  margin-top: 1.68em;
  width: 10em;
  font-size: 1.8em;
`;

export const Body = styled.div`
  margin-top: 20em;
`;
