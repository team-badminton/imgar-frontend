import React from 'react';
import styled from 'styled-components';
import { ImageCard } from '@/components/index';
import { SetPositionProps, StyledImageCardProps } from './MasonryGallery.type';
import { IMAGE_MAX_HEIGHT } from '@/components/ImageCard/ImageCard.styled';

export const StyledSection = styled.section`
  position: relative;
`;

export const IMAGECARD_WIDTH_PX = 240;
export const LAYOUT_TOTAL_COLUMN_NUM = 3;

export const StyledImageCard = styled(ImageCard)<StyledImageCardProps>`
  position: absolute;
  transform: translate3d(
    ${({ setPositionProps }) => setPositionProps.column * IMAGECARD_WIDTH_PX + 'px'},
    ${({ setPositionProps }) => setPositionProps.row * 77 + setPositionProps.sumOfAboveImageHeightPx + 'px'},
    0
  );
`;
