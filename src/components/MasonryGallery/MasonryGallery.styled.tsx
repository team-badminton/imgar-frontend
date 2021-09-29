// import React from 'react';
import styled from 'styled-components';
import { ImageCard } from '@/components/index';
import { StyledImageCardProps } from './MasonryGallery.type';
import { pxToRem } from '@/util/styleUtils';
import {
  H3__FONT_SIZE,
  H3_LINE_HEIGHT,
  H3_PADDING_TOP__SPACE_SIZE,
  FOOTER_PADDING_TOP__SPACE_SIZE,
  FOOTER_PADDING_BOTTOM__SPACE_SIZE,
  FOOTER__FONT_SIZE,
} from '@/components/ImageCard/ImageCard.styled';

const addRems = (rems: string[]): string => {
  return (
    rems
      .map((rem: string) => Number(rem.replace('rem', '')))
      .reduce((pre: number, cur: number): number => pre + cur, 0) + 'rem'
  );
};

export const StyledSection = styled.section`
  position: relative;
`;

export const IMAGECARD_WIDTH_PX = 240;
export const LAYOUT_TOTAL_COLUMN_NUM = 3;

export const StyledImageCard = styled(ImageCard)<StyledImageCardProps>`
  position: absolute;
  transform: translate3d(
    ${({ setPositionProps }) => pxToRem(setPositionProps.column * IMAGECARD_WIDTH_PX)},
    ${({ setPositionProps, theme }) => {
      const h3Height = addRems([
        theme.spaceSize[H3_PADDING_TOP__SPACE_SIZE],
        Number(theme.fontSize[H3__FONT_SIZE].replace('rem', '')) * H3_LINE_HEIGHT + 'rem',
      ]);
      const FooterHeight = addRems([
        theme.spaceSize[FOOTER_PADDING_TOP__SPACE_SIZE],
        theme.fontSize[FOOTER__FONT_SIZE],
        theme.spaceSize[FOOTER_PADDING_BOTTOM__SPACE_SIZE],
      ]);
      const imageCardHeightExcludingImage = addRems([h3Height, FooterHeight]);
      return addRems([
        setPositionProps.row * Number(imageCardHeightExcludingImage.replace('rem', '')) + 'rem',
        pxToRem(setPositionProps.sumOfAboveImageHeightPx),
      ]);
    }},
    0
  );
`;
