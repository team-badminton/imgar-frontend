import React from 'react';
import styled from 'styled-components';

import { StyledImageProps } from './Image.type';

export const StyledImage = styled.img.attrs<StyledImageProps>(({ imageWidth }) => ({
  imageWidth: (() => {
    if (typeof imageWidth === 'number') {
      return imageWidth + 'px';
    } else if (typeof imageWidth === 'string') {
      return imageWidth;
    } else {
      return '100%';
    }
  })(),
}))<StyledImageProps>`
  width: ${({ imageWidth }) => {
    return imageWidth;
  }};
  object-fit: ${({ objectFit }) => objectFit};
  height: ${({ isCircle, width }) => (isCircle ? width : '')};
  border-radius: ${({ isCircle }) => (isCircle ? '50%' : '')};
`;
