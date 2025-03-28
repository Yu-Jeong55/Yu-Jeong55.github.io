import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gotham';
    src: url('/font/Gotham-Medium.woff2') format('woff2'),
         url('/font/Gotham-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'SUIT', sans-serif;
  }

  body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background-color: #ffffff;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    cursor: pointer;
  }

  ul, li {
    list-style: none;
  }
`;
