import React, { ReactElement, useEffect, useRef } from 'react';
import { Picture } from '..';

// type
import { Container, RelativeItem, ImageContainer, Title } from './PostSideRelativeList.styled';

// types
import { PostSideRelativeListProps } from './PostSideRelativeList.type';

export default function PostSideRelativeList({ title, posts, mainPostId }: PostSideRelativeListProps): ReactElement {
  const ContainerRef = useRef<HTMLUListElement>();
  const ITEM_HEIGHT = 80;

  useEffect(() => {
    const ConatinerScrollY = posts.findIndex(({ id }) => id === mainPostId) * ITEM_HEIGHT;
    ContainerRef.current.scrollTo(0, ConatinerScrollY);
  }, []);
  return (
    <div>
      <Title>{title}</Title>
      <Container ref={ContainerRef}>
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
