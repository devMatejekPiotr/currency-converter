import { createGlobalStyle } from "styled-components";
import BackgroundImage from "./images/DALLE2_1.webp";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
  }
  
  :root {
    --color-text: #fff;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }
  
  body {
    height: 100vh;
    width: 100vw;
    background-image: url(${BackgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    font-family: Poppins, sans-serif;
    font-size: 18px;
    display: flex;
    justify-content: center;
  }`;
