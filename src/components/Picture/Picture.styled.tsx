import { pxToRem, widthConvertor } from '@/util/styleUtils';
import React from 'react';
import styled from 'styled-components';

import { StyledImageProps } from './Picture.type';

export const StyledImage = styled.img<StyledImageProps>`
  ${({ imageWidth }) => `width: ${widthConvertor(imageWidth)}`}
  object-fit: ${({ objectFit }) => objectFit};
  height: ${({ isCircle, width }) => (isCircle ? width : '')};
  border-radius: ${({ isCircle }) => (isCircle ? '50%' : '')};
`;
