import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }


  button, a {
    cursor: pointer;
    transition: filter 0.2s;
    border: none
  }

  button:hover, a:hover{
    filter: brightness(0.9);
  }

`;