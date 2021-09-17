import React, { ReactElement } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

const GlobalStyledComponent = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
}

body * {
  box-sizing: border-box;
}
`;

export default function GlobalStyle(): ReactElement {
  return (
    <>
      <Normalize />
      <GlobalStyledComponent />
    </>
  );
}
