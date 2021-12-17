import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 800px;
  height: 800px;
`;
