import React, { ReactElement } from 'react';
import ImageCard from '@/components/ImageCard/ImageCard';
import { toggleAutoPlay } from '@/redux/slices/listInfoReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useGalleryQuery } from '@/redux/api/v3';
import { PostInfo } from '@/redux/storeTypes';
import { StyledImageCard, StyledSection } from './MasonryGallery.styled';

export default function MasonryGallery(): ReactElement {
  const IMAGECARD_WIDTH = 240;
  const isAutoPlay = useSelector((state: RootState) => state.listInfo.autoPlay);
  const { data: posts } = useGalleryQuery({});
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleAutoPlay());
  };
  const postInfos: any = {};
  const ROW_NUM = 3;
  return (
    <>
      <button onClick={handleToggle}>toggle</button>
      <StyledSection>
        {/* 비동기니까 ?. 혹은 &&을 해줘야한다. */}
        {posts &&
          posts.map((postInfo, index) => {
            const row = Math.floor(index / ROW_NUM);
            const col = index % ROW_NUM;
            const objectKey = '' + row + col;
            console.log(objectKey, postInfos);
            const prevRowObjectKey = '' + (row - 1) + col;
            const prevColObjectKey = '' + row + (col - 1);
            const myPositionX = postInfos[prevColObjectKey]
              ? postInfos[prevColObjectKey].positionX + IMAGECARD_WIDTH
              : IMAGECARD_WIDTH;
            const myPositionY = postInfos[prevRowObjectKey] ? postInfos[prevRowObjectKey].positionY : 0;
            postInfos[objectKey] = {
              positionX: myPositionX,
              positionY:
                myPositionY + 48 + 28.8 + (postInfo.thumbnailHeight * IMAGECARD_WIDTH) / postInfo.thumbnailWidth,
            };
            return (
              <StyledImageCard
                positionX={myPositionX}
                positionY={myPositionY}
                key={postInfo.id}
                isAutoPlay={isAutoPlay}
                postInfo={postInfo}
                imageCardWidth={IMAGECARD_WIDTH}
              />
            );
          })}
      </StyledSection>
    </>
  );
}
