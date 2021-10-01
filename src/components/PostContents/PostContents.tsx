import React, { ReactElement } from 'react';

// components
import { PostFigure } from '@/components';

// types
import { PostContentsProps } from './PostContents.type';

export default function PostContents({ images, tags }: PostContentsProps): ReactElement {
  return (
    <div>
      {images?.map(({ id, imageHeight, imageWidth, description }) => {
        return (
          <PostFigure
            key={id}
            imageId={id}
            orgImageHeight={imageHeight}
            orgImageWidth={imageWidth}
            description={description}
          />
        );
      })}
    </div>
  );
}
