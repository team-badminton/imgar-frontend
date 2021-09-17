import React from 'react';
import styled from 'styled-components';

import { PictureProps } from './Image.type';

export const Picture = styled.picture<PictureProps>`
  > img {
    width: ${({ width }) => width};
    object-fit: ${({ objectFit }) => objectFit};
    height: ${({ isCircle, width }) => (isCircle ? width : '')};
    border-radius: ${({ isCircle }) => (isCircle ? '50%' : '')};
  }
`;
