import styled from 'styled-components';
import { ImageCard } from '@/components/index';
import { StyledImageCardProps } from './MasonryGallery.type';
import { pxToRem } from '@/util/styleUtils';
import { IMAGECARD_WIDTH_PX, IMAGECARD_HEIGHT_EXCLUDING_IMAGE__REM } from '@/components/ImageCard/ImageCard.styled';

export const COLUMN_GAP__PX = 15;
export const ROW_GAP__PX = 30;

export const StyledImageCard = styled(ImageCard).attrs<StyledImageCardProps>(({ setPositionProps }) => {
  // x좌표 : 열 개수 * (이미지 카드 컴포넌트 너비 + 열 사이 간격)
  // y좌표 : 행 개수 * (이미지 높이를 제외한 이미지 카드 컴포넌트 높이 + 행 사이 간격) + 자신 위의 전체 이미지 높이 합
  const positionX = pxToRem(setPositionProps.column * (IMAGECARD_WIDTH_PX + COLUMN_GAP__PX));
  const positionY =
    setPositionProps.row * (parseFloat(IMAGECARD_HEIGHT_EXCLUDING_IMAGE__REM) + parseFloat(pxToRem(ROW_GAP__PX))) +
    parseFloat(pxToRem(setPositionProps.sumOfAboveImageHeightPx)) +
    'rem';

  return {
    style: {
      transform: `translate3d(
    ${positionX},
    ${positionY},
    0)`,
    },
  };
})<StyledImageCardProps>`
  position: absolute;
  z-index: 4;
`;
