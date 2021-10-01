// import { takeWhile } from 'lodash';
// import React from 'react';
import styled from 'styled-components';
import { ImageContainerProps, SetDisplayProps } from './ImageCard.type';
import { pxToRem } from '@/util/styleUtils';

const addRems = (rems: string[]): string => {
  return (
    rems
      .map((rem: string) => Number(rem.replace('rem', '')))
      .reduce((pre: number, cur: number): number => pre + cur, 0) + 'rem'
  );
};

export const H3__FONT_SIZE = 's';
export const H3_LINE_HEIGHT = 1.5;
export const H3_PADDING_TOP__SPACE_SIZE = 's';
export const FOOTER_PADDING_TOP__SPACE_SIZE = 'm';
export const FOOTER_PADDING_BOTTOM__SPACE_SIZE = FOOTER_PADDING_TOP__SPACE_SIZE;
export const FOOTER__FONT_SIZE = 'xs';
export const IMAGE_MAX_HEIGHT_PX = 400;
export const IMAGECARD_WIDTH_PX = 240;
export const IMAGECARD_UNIFORM_HEIGHT__PX = IMAGECARD_WIDTH_PX;

export const StyledArticle = styled.article<SetDisplayProps>`
  width: ${({ imageCardWidth }) =>
    imageCardWidth && typeof imageCardWidth === 'number'
      ? imageCardWidth + 'px'
      : imageCardWidth && typeof imageCardWidth === 'string'
      ? imageCardWidth
      : '100%'};
  background: ${({ theme }) => theme.color.darkGray};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  box-shadow: 0 0 ${pxToRem(10)} ${({ theme }) => theme.color.black};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: ${({ theme }) => theme.color.white};
    opacity: 0;
    transition: opacity 0.25s ease 0s;
  }
  &:hover::after {
    opacity: 0.2;
  }
  h3 {
    color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.fontSize[H3__FONT_SIZE]};
    margin: 0 auto;
    padding: ${({ theme }) => theme.spaceSize[H3_PADDING_TOP__SPACE_SIZE]} ${({ theme }) => theme.spaceSize.m} 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    line-height: ${H3_LINE_HEIGHT};
    position: absolute;
    bottom: ${({ theme }) => addRems([theme.fontSize.xs, theme.spaceSize.m, theme.spaceSize.m])};
    background: ${({ theme }) => theme.color.darkGray};
    width: 100%;
  }
  em {
    position: absolute;
    top: ${({ theme }) => theme.spaceSize.s};
    right: ${({ theme }) => theme.spaceSize.s};
    background: ${({ theme }) => theme.color.primaryColor};
    color: ${({ theme }) => theme.color.white};
    font-style: normal;
    padding: ${({ theme }) => theme.spaceSize.xs} ${({ theme }) => theme.spaceSize.s};
    border-radius: ${({ theme }) => theme.borderRadius.s};
    box-shadow: 0 0 ${pxToRem(10)} ${({ theme }) => theme.color.black};
  }
`;

export const StyledDiv = styled.div<ImageContainerProps>`
  max-height: ${pxToRem(IMAGE_MAX_HEIGHT_PX)};
  overflow: hidden;
  background: ${({ theme }) => theme.color.black};
  height: ${({ theme, layoutOption }) =>
    layoutOption === 'uniform'
      ? Number(pxToRem(IMAGECARD_UNIFORM_HEIGHT__PX).replace('rem', '')) -
        Number(
          addRems([
            theme.spaceSize[H3_PADDING_TOP__SPACE_SIZE],
            Number(theme.fontSize[H3__FONT_SIZE].replace('rem', '')) * H3_LINE_HEIGHT + 'rem',
            theme.spaceSize[FOOTER_PADDING_TOP__SPACE_SIZE],
          ]).replace('rem', ''),
        ) +
        'rem'
      : 'auto'};
`;

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  color: ${({ theme }) => theme.color.lightGray};
  font-size: ${({ theme }) => theme.fontSize[FOOTER__FONT_SIZE]};
  padding-top: ${({ theme }) =>
    addRems([
      theme.spaceSize[H3_PADDING_TOP__SPACE_SIZE],
      Number(theme.fontSize[H3__FONT_SIZE].replace('rem', '')) * H3_LINE_HEIGHT + 'rem',
      theme.spaceSize[FOOTER_PADDING_TOP__SPACE_SIZE],
    ])};
  padding-bottom: ${({ theme }) => theme.spaceSize[FOOTER_PADDING_BOTTOM__SPACE_SIZE]};
  div {
    display: flex;
    align-items: center;
    z-index: 1;
  }
  div > span {
    margin-left: ${({ theme }) => theme.spaceSize.xs};
  }
  div:hover {
    color: ${({ theme }) => theme.color.white};
  }
`;
