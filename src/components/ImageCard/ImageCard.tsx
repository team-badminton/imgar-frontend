import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

// components
import { Picture, Video } from '@/components';
import { FakeImageCard, StyledArticle, StyledDiv, StyledFooter } from './ImageCard.styled';
import { ImageCardProps } from './ImageCard.type';

// SVG
import { ReactComponent as UpIconSVG } from '@/assets/Icon/upIcon.svg';
import { ReactComponent as CommentIconSVG } from '@/assets/Icon/commentIcon.svg';
import { ReactComponent as ViewIconSVG } from '@/assets/Icon/viewIcon.svg';

export default function ImageCard({
  style,
  className,
  isAutoPlay,
  postInfo,
  imageCardWidth,
  imageCardHeight,
  layoutOption,
  isLazyLoading,
}: ImageCardProps): ReactElement {
  const { id, thumbnailImageId, title, upCount, downCount, commentCount, views, type, hasSound, isAlbum } = postInfo;

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  return (
    <Link
      style={style}
      className={className}
      to={{ pathname: `/gallery/${id}`, state: { isAlbum: isAlbum } }}
      css={`
        display: inline-block;
      `}
    >
      <StyledArticle imageCardWidth={imageCardWidth} ref={ref}>
        <StyledDiv layoutOption={layoutOption}>
          {!isAutoPlay || type === 'image/jpeg' || type === 'image/png' ? (
            <Picture
              alt=""
              objectFit="cover"
              imageWidth={imageCardWidth}
              imageHeight={imageCardHeight}
              imageId={thumbnailImageId}
              inView={inView}
            />
          ) : (
            <Video imageId={thumbnailImageId} inView={inView} />
          )}
        </StyledDiv>
        {!isAutoPlay && type === 'video/mp4' && <em>{hasSound ? 'Has Sound' : 'Has No Sound'}</em>}
        <h3>{title}</h3>
        <StyledFooter>
          <div>
            <UpIconSVG title="Upvote" width="16px" height="16px" fill="currentColor" />
            <span>{upCount - downCount}</span>
          </div>
          <div>
            <CommentIconSVG title="Comment" width="16px" height="16px" fill="currentColor" />
            <span>{commentCount}</span>
          </div>
          <div>
            <ViewIconSVG title="View" />
            <span>{views}</span>
          </div>
        </StyledFooter>
      </StyledArticle>
    </Link>
  );
}
