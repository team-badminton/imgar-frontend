import styled from 'styled-components';
import { Picture } from '@/components';

// assets
import WaveUnderLine from './assets/WaveUnderLine.svg';

// types
import { StyledPictureProps } from './PostFigure.type';

// utils
import { pxToRem, hexToRgb } from '@/util/styleUtils';

export const StyledFigure = styled.figure`
  position: relative;
  width: 100%;
  margin: 0;
  .more-btn {
    position: absolute;
    top: ${pxToRem(16)};
    right: ${pxToRem(16)};
  }
`;

export const ContainerPicture = styled.div`
  background-color: ${({ theme }) => `${hexToRgb(theme.color.black, 0.1)}`};
`;

export const StyledPicture = styled(Picture)<StyledPictureProps>`
  margin-bottom: ${({ theme }) => theme.spaceSize.l};
  img {
    margin: 0 auto;
    cursor: ${({ isZoomAble, isVisibleModal }) => (isVisibleModal && 'zoom-out') || (isZoomAble && 'zoom-in')};
    display: block;
  }
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
