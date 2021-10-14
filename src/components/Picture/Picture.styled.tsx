import { pxToRem, widthConvertor } from '@/util/styleUtils';
import styled from 'styled-components';
import { StyledImageProps } from './Picture.type';

export const StyledImage = styled.img.attrs<StyledImageProps>(({ imageWidth, imageHeight, objectFit, isCircle }) => {
  return {
    style: {
      width: widthConvertor(imageWidth),
      height: pxToRem(imageHeight) ?? (isCircle ? pxToRem(imageWidth) : ''),
      objectFit: objectFit,
      borderRadius: isCircle ? 'border-radius: 50%' : null,
    },
  };
})<StyledImageProps>`
  max-width: 100%;
`;
