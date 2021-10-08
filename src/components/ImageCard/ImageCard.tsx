import React, { ReactElement } from 'react';
import { ReactComponent as UpIconSVG } from '@/assets/Icon/upIcon.svg';
import { ReactComponent as CommentIconSVG } from '@/assets/Icon/commentIcon.svg';
import { ReactComponent as ViewIconSVG } from '@/assets/Icon/viewIcon.svg';
import { Picture, Video } from '..';
import { StyledArticle, StyledDiv, StyledFooter } from './ImageCard.styled';
import { ImageCardProps } from './ImageCard.type';
import { Link } from 'react-router-dom';

export default function ImageCard({
  style,
  className,
  isAutoPlay,
  postInfo,
  imageCardWidth,
  layoutOption,
  isLazyLoading,
}: ImageCardProps): ReactElement {
  const { id, thumbnailImageId, thumbnailWidth, title, upCount, downCount, commentCount, views, type, hasSound } =
    postInfo;

  return (
    <Link
      style={style}
      className={className}
      to={`gallery/${id}`}
      css={`
        display: inline-block;
      `}
    >
      <StyledArticle imageCardWidth={imageCardWidth}>
        <StyledDiv layoutOption={layoutOption}>
          {!isAutoPlay || type === 'image/jpeg' || type === 'image/png' ? (
            <Picture
              alt=""
              objectFit="contain"
              imageWidth={imageCardWidth}
              imageId={thumbnailImageId}
              isLazyLoading={isLazyLoading}
              className={isLazyLoading ? 'lazyLoadingPicture' : ''}
            />
          ) : (
            <Video
              imageId={thumbnailImageId}
              isLazyLoading={isLazyLoading}
              className={isLazyLoading ? 'lazyLoadingPicture' : ''}
            />
          )}
        </StyledDiv>
        {!isAutoPlay && type === 'video/mp4' && <em>{hasSound ? 'Has Sound' : 'Has No Sound'}</em>}
        <h3>{title}</h3>
        <StyledFooter>
          <div>
            <UpIconSVG title="Upvote" />
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
