import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  font-size: 16px;
  font-family:'Times New Roman', Times, serif;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
`;
export default GlobalStyle;
