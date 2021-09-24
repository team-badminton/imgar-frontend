import React, { ReactElement } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

const GlobalStyledComponent = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  background-color:${({ theme }) => theme.color.backgroundGray};
}

body * {
  box-sizing: border-box;
}

body *::before {
  box-sizing: inherit;
}

body *::after {
  box-sizing: inherit;
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
