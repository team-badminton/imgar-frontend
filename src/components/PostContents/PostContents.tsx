import React, { ReactElement } from 'react';

// components
import { Picture } from '@/components';

// styles
import { StyledFigure, StyledFigureCaption } from './PostContents.styled';

// types
import { PostContentsProps } from './PostContents.type';

export default function PostContents({ images, tags }: PostContentsProps): ReactElement {
  return (
    <div>
      {images?.map(({ id, description }) => {
        return (
          <StyledFigure key={id}>
            <Picture imageId={id} />
            <StyledFigureCaption key={id}>
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
      })}
    </div>
  );
}
