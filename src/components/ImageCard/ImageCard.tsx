import React, { ReactElement } from 'react';
import { PostInfo } from '../../redux/storeTypes';
import { ReactComponent as UpIconSVG } from '../../assets/Icon/UpIcon.svg';
import { ReactComponent as CommentIconSVG } from '../../assets/Icon/commentIcon.svg';
import { ReactComponent as ViewIconSVG } from '../../assets/Icon/viewIcon.svg';
import { Image } from '..';

interface ImageCardProps {
  postInfo: PostInfo;
}

export default function ImageCard({ postInfo }: ImageCardProps): ReactElement {
  const thumbnail = postInfo.images[0];
  const { title, upCount, downCount, commentCount, views } = postInfo;
  const ALT_TEXT = '사용자 혹은 AI가 작성한 이미지에 대한 구체적인 설명';
  return (
    <article>
      <Image
        alt={ALT_TEXT}
        objectFit="contain"
        src={`https://i.imgur.com/${thumbnail.id}_d.webp?maxwidth=${thumbnail.imageWidth}&shape=thumb&fidelity=high`}
      />
      <h3>{title}</h3>
      <footer>
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
      </footer>
    </article>
  );
}
