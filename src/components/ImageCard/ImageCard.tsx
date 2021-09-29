import React, { ReactElement } from 'react';
import { ReactComponent as UpIconSVG } from '@/assets/Icon/upIcon.svg';
import { ReactComponent as CommentIconSVG } from '@/assets/Icon/commentIcon.svg';
import { ReactComponent as ViewIconSVG } from '@/assets/Icon/viewIcon.svg';
import { Picture, Video } from '..';
import { StyledArticle, StyledDiv, StyledFooter } from './ImageCard.styled';
import { ImageCardProps } from './ImageCard.type';
import { Link } from 'react-router-dom';
import { IMAGECARD_WIDTH_PX } from '../MasonryGallery/MasonryGallery.styled';

export default function ImageCard({
  style,
  className,
  isAutoPlay,
  postInfo,
  imageCardWidth,
}: ImageCardProps): ReactElement {
  const thumbnail = postInfo.images[0];
  const { id, thumbnailImageId, thumbnailWidth, title, upCount, downCount, commentCount, views } = postInfo;

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
        <StyledDiv>
          {!isAutoPlay || thumbnail.type === 'image/jpeg' || thumbnail.type === 'image/png' ? (
            <Picture
              alt=""
              objectFit="contain"
              imageWidth={IMAGECARD_WIDTH_PX}
              src={`https://i.imgur.com/${thumbnailImageId}_d.webp?maxwidth=${thumbnailWidth}&shape=thumb&fidelity=high`}
            />
          ) : (
            <Video src={`https://i.imgur.com/${thumbnailImageId}_lq.mp4`} />
          )}
        </StyledDiv>
        {!isAutoPlay && thumbnail.type === 'video/mp4' && <em>{thumbnail.hasSound ? 'Has Sound' : 'Has No Sound'}</em>}
        <h3>{title}</h3>
        <StyledFooter>
          <div>
            <UpIconSVG />
            <span>{upCount - downCount}</span>
          </div>
          <div>
            <CommentIconSVG />
            <span>{commentCount}</span>
          </div>
          <div>
            <ViewIconSVG />
            <span>{views}</span>
          </div>
        </StyledFooter>
      </StyledArticle>
    </Link>
  );
}
