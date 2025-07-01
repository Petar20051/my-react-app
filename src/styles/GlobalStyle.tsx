import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
 
  *, *::before, *::after {
    box-sizing: border-box;
  }

 
  body, h1, h2, h3, h4, h5, h6, p, ul, ol, figure, blockquote {
    margin: 0;
    padding: 0;
  }

  
  body {
    font-family: sans-serif;
    line-height: 1.5;
    background-color: #fff;
    color: #000;
  }

  
  ul, ol {
    list-style: none;
  }


  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

export default GlobalStyle;
