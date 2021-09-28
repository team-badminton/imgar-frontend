import React, { ReactElement } from 'react';
import { ReactComponent as UpIconSVG } from '@/assets/Icon/upIcon.svg';
import { ReactComponent as CommentIconSVG } from '@/assets/Icon/commentIcon.svg';
import { ReactComponent as ViewIconSVG } from '@/assets/Icon/viewIcon.svg';
import { Image, Video } from '..';
import { StyledImageCard, StyledImageCardFooter } from './ImageCard.styled';
import { ImageCardProps } from './ImageCard.type';
import { pxToRem } from '@/util/styleUtils';
import { Link } from 'react-router-dom';

export default function ImageCard({ isAutoPlay, postInfo, imageCardWidth }: ImageCardProps): ReactElement {
  const thumbnail = postInfo.images[0];
  const { id, thumbnailImageId, thumbnailWidth, title, upCount, downCount, commentCount, views } = postInfo;
  const ALT_TEXT = '사용자 혹은 AI가 작성한 이미지에 대한 구체적인 설명';
  const IMAGE_MAX_HEIGHT = pxToRem(400);

  return (
    <Link
      to={`gallery/${id}`}
      css={`
        display: inline-block;
      `}
    >
      <StyledImageCard imageCardWidth={imageCardWidth} aria-labelledby={id}>
        <div
          css={`
            max-height: ${IMAGE_MAX_HEIGHT};
            overflow: hidden;
          `}
        >
          {!isAutoPlay || thumbnail.type === 'image/jpeg' ? (
            <Image
              alt={ALT_TEXT}
              objectFit="contain"
              src={`https://i.imgur.com/${thumbnailImageId}_d.webp?maxwidth=${thumbnailWidth}&shape=thumb&fidelity=high`}
            />
          ) : (
            <Video src={`https://i.imgur.com/${thumbnailImageId}_lq.mp4`} />
          )}
        </div>
        <h3 id={id}>
          {!isAutoPlay && thumbnail.type === 'video/mp4' && (
            <em>{thumbnail.hasSound ? 'Has Sound' : 'Has No Sound'}</em>
          )}
          {title}
        </h3>
        <StyledImageCardFooter>
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
        </StyledImageCardFooter>
      </StyledImageCard>
    </Link>
  );
}
