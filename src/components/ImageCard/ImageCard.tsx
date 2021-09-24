import React, { ReactElement } from 'react';
import { PostInfo } from '../../redux/storeTypes';
import { ReactComponent as UpIconSVG } from '@/assets/Icon/upIcon.svg';
import { ReactComponent as CommentIconSVG } from '@/assets/Icon/commentIcon.svg';
import { ReactComponent as ViewIconSVG } from '@/assets/Icon/viewIcon.svg';
import { Image, Video } from '..';
import { StyledImageCard, StyledImageCardFooter } from './ImageCard.styled';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux';

interface ImageCardProps {
  postInfo: PostInfo;
  ImageCardWidth: string | number;
}

// App.js
// export default function App(): ReactElement {
//   const dispatch = useDispatch();
//   const handleToggle = () => {
//     dispatch(toggleAutoPlay());
//   };
//   return (
//     <>
//       <button onClick={handleToggle}>toggle</button>
//       <ImageCard postInfo={postInfo} ImageCardWidth={240} />
//     </>
//   );
// }

export default function ImageCard({ postInfo, ImageCardWidth }: ImageCardProps): ReactElement {
  const thumbnail = postInfo.images[0];
  const { thumbnailImageId, thumbnailWidth, title, upCount, downCount, commentCount, views } = postInfo;
  const isAutoPlay = useSelector((state: RootState) => state.listInfo.autoPlay);
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
          <Video src={`https://i.imgur.com/${thumbnailImageId}_lq.mp4`} />
        )}

        <h3>
          {!isAutoPlay && thumbnail.type === 'video/mp4' && (
            <em>{thumbnail.hasSound ? 'has no sound' : 'has sound'}</em>
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
    </a>
  );
}
