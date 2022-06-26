import React from 'react';
import { Counter } from './features/Counter/index';
import { GlobalStyle } from './helpers/GlobalStyles';
import { CookiesProvider } from 'react-cookie';
export function App() {
  return (
    <>
        <GlobalStyle />
      <div>
        <CookiesProvider>
          <Counter />
        </CookiesProvider>
      </div>
    </>
  );
}
