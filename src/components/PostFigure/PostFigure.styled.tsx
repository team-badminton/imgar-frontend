import styled from 'styled-components';
import { Picture } from '@/components';

// assets
import WaveUnderLine from './assets/WaveUnderLine.svg';
import { StyledPictureProps } from './PostFigure.type';

export const StyledFigure = styled.figure`
  width: 100%;
  margin: 0;
  figcaption {
    margin-bottom: ${({ theme }) => theme.spaceSize.l};
  }
`;

export const StyledPicture = styled(Picture)<StyledPictureProps>`
  img {
    margin: 0 auto;
    cursor: ${({ isZoomable }) => isZoomable && 'zoom-in'};
    display: block;
  }
`;

export const StyledFigureCaption = styled.figcaption`
  color: ${({ theme }) => theme.color.white};
  display: inline-block;
  padding: 0 ${({ theme }) => theme.spaceSize.l};
  a {
    border-bottom: 1px solid #01b96b;
    word-break: break-word;
  }
  a:hover {
    background-image: url(${WaveUnderLine});
    background-position: 0 100%;
    background-size: auto 36px;
    background-repeat: repeat;
    text-decoration: none;
    border-bottom: none;
    padding-bottom: 3px;
  }
`;
