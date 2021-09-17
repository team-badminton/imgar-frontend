import React from 'react';
import styled from 'styled-components';

import { StyledImageProps } from './Image.type';

export const StyledImage = styled.img<StyledImageProps>`
  width: ${({ width }) => (width ? width : '100%')};
  object-fit: ${({ objectFit }) => objectFit};
  height: ${({ isCircle, width }) => (isCircle ? width : '')};
  border-radius: ${({ isCircle }) => (isCircle ? '50%' : '')};
`;
