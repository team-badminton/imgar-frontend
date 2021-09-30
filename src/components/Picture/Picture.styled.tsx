import { widthConvertor } from '@/util/styleUtils';
import styled from 'styled-components';
import { StyledImageProps } from './Picture.type';

export const StyledImage = styled.img<StyledImageProps>`
  ${({ imageWidth }) => imageWidth && `width: ${widthConvertor(imageWidth)};`}
  max-width: 100%;
  object-fit: ${({ objectFit }) => objectFit};
  height: ${({ isCircle, imageWidth }) => (isCircle ? imageWidth : '')};
  border-radius: ${({ isCircle }) => (isCircle ? '50%' : '')};
`;
