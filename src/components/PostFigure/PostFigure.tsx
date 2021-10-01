import React, { ReactElement, useEffect, useRef, useState } from 'react';

//components
import { Picture } from '@/components';

//styles
import { StyledFigure, StyledFigureCaption, StyledPicture } from './PostFigure.styled';

// types
import { PostFigureProps } from './PostFigure.type';

// hooks
import useThrottle from '@/hooks/useThrottle';

export default function PostFigure({
  imageId,
  orgImageWidth,
  orgImageHeight,
  description,
}: PostFigureProps): ReactElement {
  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <StyledFigure key={imageId}>
      <StyledPicture ref={imageRef} imageId={imageId} />
      <StyledFigureCaption key={imageId}>
        {description
          ?.split(/(https?:\/\/[\w\/\.\-_=\?\&#$]+)|(\n)/)
          .filter(str => str)
          .map((str, index) =>
            str.includes('http') ? (
              <a key={str + index} href={str} target="_blank" rel="noopener noreferrer">
                {str}
              </a>
            ) : str === '\n' ? (
              <br key={str + index} />
            ) : (
              <span key={str + index}>{str}</span>
            ),
          )}
      </StyledFigureCaption>
    </StyledFigure>
  );
}
