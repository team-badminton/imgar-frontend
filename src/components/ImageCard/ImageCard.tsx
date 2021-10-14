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
          {inView ? (
            !isAutoPlay || type === 'image/jpeg' || type === 'image/png' ? (
              <Picture
                alt=""
                objectFit="contain"
                imageWidth={imageCardWidth}
                imageHeight={imageCardHeight}
                imageId={thumbnailImageId}
                isLazyLoading={isLazyLoading}
              />
            ) : (
              <Video imageId={thumbnailImageId} isLazyLoading={isLazyLoading} />
            )
          ) : (
            <FakeImageCard imageCardWidth={imageCardWidth} imageCardHeight={imageCardHeight} />
          )}
        </StyledDiv>
        {!isAutoPlay && type === 'video/mp4' && <em>{hasSound ? 'Has Sound' : 'Has No Sound'}</em>}
        <h3>{title}</h3>
        <StyledFooter>
          <div>
            <UpIconSVG title="Upvote" fill="white" />
            <span>{upCount - downCount}</span>
          </div>
          <div>
            <CommentIconSVG title="Comment" />
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
