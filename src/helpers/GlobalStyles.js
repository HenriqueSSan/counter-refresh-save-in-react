import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: monospace;
}

body {
  width: 100%;
  min-height: 100vh;
  height: auto;
}

.main {
  width: 100%;
  height: 100vh;
}
.counter {
  max-width: 1150px;
  height: 100%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
`;
