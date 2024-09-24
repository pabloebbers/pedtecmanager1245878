import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --fonteMenu: '';
    --fonteTitulo: '';
    --fonteTexto: '';
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .menu{
  font-family: var(--fonteMenu) !important;
  }

  
  .titulo{
  font-family: var(--fonteTitulo) !important;

  }

  body {
    overflow-x: hidden;
    font-family: var(--fonteTexto) !important;
  }
`;

export default GlobalStyle;
