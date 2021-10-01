import React, { ReactElement } from 'react';
// import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGalleryQuery } from '@/redux/api/v3';
import { IMAGE_MAX_HEIGHT_PX } from '@/components/ImageCard/ImageCard.styled';
import { IMAGECARD_WIDTH_PX, LAYOUT_TOTAL_COLUMN_NUM, StyledImageCard, StyledSection } from './MasonryGallery.styled';
import { SetPositionProps } from './MasonryGallery.type';
import { RootState } from '@/redux';

export default function MasonryGallery(): ReactElement {
  const isAutoPlay = useSelector((state: RootState) => state.listInfo.autoPlay);
  const { data: posts } = useGalleryQuery({});
  const ImageCardPositionInfos: {
    [key: string]: SetPositionProps;
  } = {};

  return (
    <>
      <StyledSection>
        {/* 비동기니까 ?. 혹은 &&을 해줘야한다. */}
        {posts &&
          posts.slice(0, 30).map((postInfo, index) => {
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
                ((postInfo.thumbnailHeight * IMAGECARD_WIDTH_PX) / postInfo.thumbnailWidth > IMAGE_MAX_HEIGHT_PX
                  ? IMAGE_MAX_HEIGHT_PX
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
