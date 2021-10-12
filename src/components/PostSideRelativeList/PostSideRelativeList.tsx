import React, { ReactElement, useEffect } from 'react';
import { Picture } from '..';

// type
import { Container, RelativeItem, ImageContainer, Title } from './PostSideRelativeList.styled';

// types
import { PostSideRelativeListProps } from './PostSideRelativeList.type';

export default function PostSideRelativeList({ title, posts }: PostSideRelativeListProps): ReactElement {
  return (
    <div>
      <Title>{title}</Title>
      <Container>
        {posts.map(({ id, title, thumbnailImageId, imageCount }) => (
          <RelativeItem key={id}>
            <span className="item-title">{title}</span>
            <ImageContainer>
              <Picture imageId={thumbnailImageId} imageHeight={64} imageWidth={64} />
              <span className="image-count">{imageCount}</span>
            </ImageContainer>
          </RelativeItem>
        ))}
      </Container>
    </div>
  );
}
