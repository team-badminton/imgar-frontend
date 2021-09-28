import React from 'react';
import styled from 'styled-components';
import { ImageCard } from '@/components/index';
import { SetPositionProps } from './MasonryGallery.type';

export const StyledSection = styled.section`
  position: realative;
`;

export const StyledImageCard = styled(ImageCard)<SetPositionProps>`
  position: absolute;
  transform: translate3d(${({ positionX }) => positionX + 'px'}, ${({ positionY }) => positionY + 'px'}, 0);
`;
