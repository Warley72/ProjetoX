"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    width: 100%;
    height: 100%;
    max-width: 100vw;
    background-color: ${({theme}) => theme.colors};
    background-image: url(/background/background-artwork.webp);
    background-repeat: no-repeat;
    background-position: top center;
    font-family: ${({ theme }) => theme.fonts.body};


  }

  h1, h2, h3 {
    font-weight: 700;
  }

  p {
    line-height: 1.6;
  }

  ul {
    list-style-type: none;
  }

  img {
  border: none;
 }
`;
export default GlobalStyles;