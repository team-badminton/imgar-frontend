import styled from 'styled-components';
import { Picture } from '@/components';

// assets
import WaveUnderLine from './assets/WaveUnderLine.svg';
import { StyledPictureProps } from './PostFigure.type';
import { pxToRem } from '@/util/styleUtils';

export const StyledFigure = styled.figure`
  width: 100%;
  margin: 0;
`;

export const StyledPicture = styled(Picture)<StyledPictureProps>`
  display: block;
  background-color: ${({ theme }) => theme.color.deepDarkGray};
  img {
    margin: 0 auto;
    cursor: ${({ isZoomAble, isVisibleModal }) => (isVisibleModal && 'zoom-out') || (isZoomAble && 'zoom-in')};
    display: block;
  }
  margin-bottom: ${({ theme }) => theme.spaceSize.l};
`;

export const StyledFigureCaption = styled.figcaption`
  margin-bottom: ${({ theme }) => theme.spaceSize.l};
  color: ${({ theme }) => theme.color.white};
  display: inline-block;
  padding: 0 ${({ theme }) => theme.spaceSize.l};
  white-space: pre-wrap;
  a {
    border-bottom: ${pxToRem(1)} solid ${({ theme }) => theme.color.primaryColor};
    word-break: break-word;
  }
  a:hover {
    background-image: url(${WaveUnderLine});
    background-position: 0 100%;
    background-size: auto ${pxToRem(36)};
    background-repeat: repeat;
    text-decoration: none;
    border-bottom: none;
    padding-bottom: ${pxToRem(3)};
  }
`;
