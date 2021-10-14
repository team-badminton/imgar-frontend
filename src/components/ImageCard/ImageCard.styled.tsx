import styled from 'styled-components';
import { FakeImageCardProps, ImageContainerProps, StyledArticleProps } from './ImageCard.type';
import { pxToRem } from '@/util/styleUtils';
import { defaultTheme } from '@/theme/themes';

/** ---------------------------- 상수 ---------------------------- */
// 기본 이미지 카드 컴포넌트 너비 설정
export const IMAGECARD_WIDTH_PX = 240;
// 이미지 카드 컴포넌트 최대 높이 설정
export const IMAGE_MAX_HEIGHT_PX = 400;
// uniform 레이아웃일 때 이미지 카드 컴포넌트의 높이 설정
export const IMAGECARD_UNIFORM_HEIGHT__PX = IMAGECARD_WIDTH_PX;

// 이미지 카드 컴포넌트 제목 스타일 설정
const H3__FONT_SIZE = defaultTheme.fontSize.s;
const H3_LINE_HEIGHT = 1.5;
const H3_PADDING_TOP__SPACE_SIZE = defaultTheme.spaceSize.s;
// 이미지 카드 컴포넌트 제목 높이 계산
const H3_Height__REM = parseFloat(H3_PADDING_TOP__SPACE_SIZE) + parseFloat(H3__FONT_SIZE) * H3_LINE_HEIGHT + 'rem';

// 이미지 카드 컴포넌트에서 이미지 제외 부분 스타일 설정
const FOOTER_PADDING_TOP__SPACE_SIZE = defaultTheme.spaceSize.m;
const FOOTER_PADDING_BOTTOM__SPACE_SIZE = FOOTER_PADDING_TOP__SPACE_SIZE;
const FOOTER__FONT_SIZE = defaultTheme.fontSize.xs;
const FOOTER_Height__REM =
  parseFloat(FOOTER_PADDING_TOP__SPACE_SIZE) +
  parseFloat(FOOTER__FONT_SIZE) +
  parseFloat(FOOTER_PADDING_BOTTOM__SPACE_SIZE) +
  'rem';
// 이미지 카드 컴포넌트에서 이미지 제외 부분 높이 계산

export const IMAGECARD_HEIGHT_EXCLUDING_IMAGE__REM =
  parseFloat(H3_Height__REM) + parseFloat(FOOTER_Height__REM) + 'rem';
/** ----------------------------------------------------------------- */

export const StyledArticle = styled.article.attrs<StyledArticleProps>(({ imageCardWidth }) => ({
  style: {
    width: pxToRem(imageCardWidth),
  },
}))<StyledArticleProps>`
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
    font-size: ${H3__FONT_SIZE};
    margin: 0 auto;
    padding: ${H3_PADDING_TOP__SPACE_SIZE} ${({ theme }) => theme.spaceSize.m} 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    line-height: ${H3_LINE_HEIGHT};
    position: absolute;
    bottom: ${FOOTER_Height__REM};
    background: ${({ theme }) => theme.color.darkGray};
    width: 100%;
  }
  strong {
    background: ${({ theme }) => theme.color.lightGray};
    color: ${({ theme }) => theme.color.black};
    font-style: normal;
    padding: ${({ theme }) => theme.spaceSize.xs} ${({ theme }) => theme.spaceSize.s};
    border-radius: ${({ theme }) => theme.borderRadius.s};
    box-shadow: 0 0 ${pxToRem(10)} ${({ theme }) => theme.color.black};
  }
  em {
    background: ${({ theme }) => theme.color.primaryColor};
    color: ${({ theme }) => theme.color.white};
    font-style: normal;
    font-weight: 700;
    padding: ${({ theme }) => theme.spaceSize.xs} ${({ theme }) => theme.spaceSize.s};
    border-radius: ${({ theme }) => theme.borderRadius.s};
    box-shadow: 0 0 ${pxToRem(10)} ${({ theme }) => theme.color.black};
    margin-left: ${({ theme }) => theme.spaceSize.xs};
  }
`;

export const StyledExtraData = styled.div`
  position: absolute;
  display: flex;
  top: ${({ theme }) => theme.spaceSize.s};
  right: ${({ theme }) => theme.spaceSize.s};
`;

export const StyledDiv = styled.div<ImageContainerProps>`
  max-height: ${pxToRem(IMAGE_MAX_HEIGHT_PX)};
  overflow: hidden;
  background: ${({ layoutOption }) =>
    layoutOption === 'uniform' ? ({ theme }) => theme.color.black : ({ theme }) => theme.color.darkGray};
  height: ${({ layoutOption }) =>
    layoutOption === 'uniform'
      ? parseFloat(pxToRem(IMAGECARD_UNIFORM_HEIGHT__PX)) - parseFloat(IMAGECARD_HEIGHT_EXCLUDING_IMAGE__REM) + 'rem'
      : 'auto'};
`;

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  color: ${({ theme }) => theme.color.lightGray};
  font-size: ${FOOTER__FONT_SIZE};
  padding-top: ${parseFloat(H3_PADDING_TOP__SPACE_SIZE) +
  parseFloat(H3__FONT_SIZE) * H3_LINE_HEIGHT +
  parseFloat(FOOTER_PADDING_TOP__SPACE_SIZE) +
  'rem'};
  padding-bottom: ${FOOTER_PADDING_BOTTOM__SPACE_SIZE};
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

export const FakeImageCard = styled.div.attrs<FakeImageCardProps>(({ imageCardWidth, imageCardHeight }) => ({
  style: {
    width: `${pxToRem(imageCardWidth)}`,
    height: `${pxToRem(imageCardHeight)}`,
  },
}))<FakeImageCardProps>`
  background: white;
`;
