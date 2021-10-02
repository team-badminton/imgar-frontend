import React, { ReactElement } from 'react';

// components
import { PostFigure } from '@/components';

// types
import { PostContentsProps } from './PostContents.type';

// styles
import { StyledTag } from './PostContents.styled';

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
      {tags?.map(({ name, displayName, backgroundImageId }) => {
        return (
          <StyledTag
            backgroundImageId={backgroundImageId}
            backgroundColor="primaryColor"
            color="white"
            key={name}
            size="medium"
            text={displayName}
            to={`to/${name}`}
          />
        );
      })}
    </div>
  );
}
