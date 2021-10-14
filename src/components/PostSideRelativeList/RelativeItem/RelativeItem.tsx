import { Picture } from '@/components';
import { pxToRem } from '@/util/styleUtils';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { ImageContainer, NoThumbnail, Container } from './RelativeItem.styled';
import { RelativeItemProps } from './RelativeItem.type';

const RelativeItem = React.forwardRef<HTMLLIElement, RelativeItemProps>(
  ({ postId, title, thumbnailImageId, imageCount }: RelativeItemProps, ref): ReactElement => {
    return (
      <Container ref={ref}>
        <Link
          css={`
            display: block;
            display: flex;
            gap: ${pxToRem(8)};
            align-items: center;
            margin-bottom: ${pxToRem(16)};
          `}
          to={`/gallery/${postId}`}
        >
          <span className="item-title">{title}</span>
          <ImageContainer>
            {thumbnailImageId ? (
              <Picture imageId={thumbnailImageId} imageHeight={64} imageWidth={64} />
            ) : (
              <NoThumbnail>No image</NoThumbnail>
            )}
            {imageCount > 1 && <span className="image-count">{imageCount}</span>}
          </ImageContainer>
        </Link>
      </Container>
    );
  },
);

RelativeItem.displayName = 'RelativeItem';

export default React.memo(RelativeItem);
