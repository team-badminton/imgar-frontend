import { pxToRem } from '@/util/styleUtils';
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

a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}

ul{
  margin: 0;
  padding-left: 0;
  list-style: none;
}

button {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
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
