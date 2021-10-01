import React, { ReactElement, useEffect, useRef, useState } from 'react';

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
  const [isZoomable, setIsZoomable] = useState(false);

  const handleResizeObserver = useThrottle((entries: ResizeObserverEntry[]) => {
    const figureWidth = entries[0].borderBoxSize[0].inlineSize;
    const figureHeight = entries[0].borderBoxSize[0].blockSize;
    console.log(figureWidth, orgImageWidth, figureHeight, orgImageHeight);
    if (figureWidth < orgImageWidth || figureHeight < orgImageHeight) {
      setIsZoomable(true);
    } else {
      setIsZoomable(false);
    }
  }, 500);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(handleResizeObserver);

    resizeObserver.observe(imageRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <StyledFigure key={imageId}>
      <StyledPicture isZoomable={isZoomable} ref={imageRef} imageId={imageId} />
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
