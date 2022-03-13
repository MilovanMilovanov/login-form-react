import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   * {
     box-sizing: border-box;
     appearance: none;
     border: none;
     outline: 0;
     z-index: 1;
     padding: 0;
     margin: 0;
   };

  body {
  font-family: Arial, Helvetica, sans-serif;
    background: rgb(245, 241, 241);
    justify-content: center;
    padding: 1.2em;
    display: flex;
    height: 100vh;
    width: 100%;
  }`;

export default GlobalStyles;
