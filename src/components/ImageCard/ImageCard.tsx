import React, { ReactElement } from 'react';
import { PostInfo } from '../../redux/storeTypes';
import { ReactComponent as UpIconSVG } from '../../assets/Icon/UpIcon.svg';
import { ReactComponent as CommentIconSVG } from '../../assets/Icon/commentIcon.svg';
import { ReactComponent as ViewIconSVG } from '../../assets/Icon/viewIcon.svg';
import { Image } from '..';
import { StyledImageCard, StyledImageCardFooter } from './ImageCard.styled';
import { store } from '../../redux/index';

interface ImageCardProps {
  postInfo: PostInfo;
  ImageCardWidth: string | number;
}

export default function ImageCard({ postInfo, ImageCardWidth }: ImageCardProps): ReactElement {
  const thumbnail = postInfo.images[0];
  const { thumbnailImageId, thumbnailWidth, title, upCount, downCount, commentCount, views } = postInfo;
  // const isAutoPlay = store.getState().listInfo.autoPlay;
  const isAutoPlay = true;
  const ALT_TEXT = '사용자 혹은 AI가 작성한 이미지에 대한 구체적인 설명';

  return (
    <a href="/postUrl">
      <StyledImageCard width={ImageCardWidth}>
        {!isAutoPlay || thumbnail.type === 'image/jpeg' ? (
          <Image
            alt={ALT_TEXT}
            objectFit="contain"
            src={`https://i.imgur.com/${thumbnailImageId}_d.webp?maxwidth=${thumbnailWidth}&shape=thumb&fidelity=high`}
          />
        ) : (
          <div>비디오</div>
        )}

        <h3>{title}</h3>
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
    </a>
  );
}
