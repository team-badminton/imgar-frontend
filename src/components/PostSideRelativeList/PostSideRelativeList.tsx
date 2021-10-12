import React, { ReactElement, useEffect, useRef } from 'react';

// components
import { Picture } from '@/components';

// styles
import { Container, RelativeItem, ImageContainer, Title } from './PostSideRelativeList.styled';

// types
import { PostSideRelativeListProps } from './PostSideRelativeList.type';

// etc
import { Link } from 'react-router-dom';
import { pxToRem } from '@/util/styleUtils';

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
            <Link
              css={`
                display: block;
                display: flex;
                gap: ${pxToRem(8)};
                align-items: center;
                margin-bottom: ${pxToRem(16)};
              `}
              to={`/gallery/${id}`}
            >
              <span className="item-title">{title}</span>
              <ImageContainer>
                <Picture imageId={thumbnailImageId} imageHeight={64} imageWidth={64} />
                {imageCount > 1 && <span className="image-count">{imageCount}</span>}
              </ImageContainer>
            </Link>
          </RelativeItem>
        ))}
      </Container>
    </div>
  );
}
