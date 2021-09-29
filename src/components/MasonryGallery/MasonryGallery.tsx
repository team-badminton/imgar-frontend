import React, { ReactElement } from 'react';
import ImageCard from '@/components/ImageCard/ImageCard';
import { toggleAutoPlay } from '@/redux/slices/listInfoReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useGalleryQuery } from '@/redux/api/v3';
import { PostInfo } from '@/redux/storeTypes';
import { IMAGECARD_WIDTH_PX, LAYOUT_TOTAL_COLUMN_NUM, StyledImageCard, StyledSection } from './MasonryGallery.styled';
import { SetPositionProps } from './MasonryGallery.type';

export default function MasonryGallery(): ReactElement {
  const isAutoPlay = useSelector((state: RootState) => state.listInfo.autoPlay);
  const { data: posts } = useGalleryQuery({});
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleAutoPlay());
  };

  const ImageCardPositionInfos: {
    [key: string]: SetPositionProps;
  } = {};

  return (
    <>
      <button onClick={handleToggle}>toggle</button>
      <StyledSection>
        {/* 비동기니까 ?. 혹은 &&을 해줘야한다. */}
        {posts &&
          posts.map((postInfo, index) => {
            const row = Math.floor(index / LAYOUT_TOTAL_COLUMN_NUM);
            const column = index % LAYOUT_TOTAL_COLUMN_NUM;
            const objectKey = '' + row + column;
            const aboveImageCardObjectKey = '' + (row - 1) + column;
            const sumOfAboveImageHeightPx = ImageCardPositionInfos[aboveImageCardObjectKey]
              ? ImageCardPositionInfos[aboveImageCardObjectKey].sumOfImageHeightPx
              : 0;

            ImageCardPositionInfos[objectKey] = {
              column,
              row,
              sumOfAboveImageHeightPx,
              sumOfImageHeightPx:
                sumOfAboveImageHeightPx +
                ((postInfo.thumbnailHeight * IMAGECARD_WIDTH_PX) / postInfo.thumbnailWidth > 400
                  ? 400
                  : (postInfo.thumbnailHeight * IMAGECARD_WIDTH_PX) / postInfo.thumbnailWidth),
            };

            return (
              <StyledImageCard
                setPositionProps={{ ...ImageCardPositionInfos[objectKey] }}
                key={postInfo.id}
                isAutoPlay={isAutoPlay}
                postInfo={postInfo}
                imageCardWidth={IMAGECARD_WIDTH_PX}
              />
            );
          })}
      </StyledSection>
    </>
  );
}
