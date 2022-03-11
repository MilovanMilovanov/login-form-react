import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    border: none;
    outline: 0;
    appearance: none;
    box-sizing: border-box;
    z-index: 1;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: center;
    padding: 1.2em;
    height: 100vh;
    width: 100%;
    ${props => props.theme.bgColorSwitch ?
    `
    background: rgb(245, 241, 241);
    // background: rgba(0,0,0,.9);
    `
    :
    `
    // background: rgb(153, 187, 224);
    // background: black;
    transition: background 3s; 
    `
  };
  }`;

export default GlobalStyles;