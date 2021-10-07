import {
  IMAGECARD_UNIFORM_HEIGHT__PX,
  IMAGECARD_WIDTH_PX,
  IMAGE_MAX_HEIGHT_PX,
} from '@/components/ImageCard/ImageCard.styled';
import { useTypedSelector } from '@/redux';
import { useGalleryQuery } from '@/redux/api';
import { totalColumnNumSelector } from '@/redux/slices/displayReducer';
import { pxToRem } from '@/util/styleUtils';
import React, { ReactElement } from 'react';
// import { useHistory, useLocation, useParams } from 'react-router-dom';
import { StyledImageCard } from './MasonryGallery.styled';
import { SetPositionProps } from './MasonryGallery.type';

export default function MasonryGallery(): ReactElement {
  // 리덕스 전역 상태
  const isAutoPlay = useTypedSelector(state => state.listInfo.autoPlay);
  const layoutOption = useTypedSelector(state => state.listInfo.layout);
  const totalColumn = useTypedSelector(totalColumnNumSelector);
  const masonryGalleryWidth = useTypedSelector(state => state.display.masonryGalleryWidth);

  // API 호출
  const category = useTypedSelector(state => state.listInfo.category);
  const sortOption = useTypedSelector(state => state.listInfo.sortOption);
  const { data: posts } = useGalleryQuery({ section: category, sort: sortOption });
  const ImageCardPositionInfos: {
    [key: string]: SetPositionProps;
  } = {};

  return (
    <section
      css={`
        position: relative;
        margin: 0 auto;
        width: ${pxToRem(masonryGalleryWidth)};
      `}
    >
      {/* 비동기니까 ?. 혹은 &&을 해줘야한다. */}
      {posts &&
        posts.map((postInfo, index) => {
          const row = Math.floor(index / totalColumn);
          const column = index % totalColumn;
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
              (layoutOption === 'uniform'
                ? IMAGECARD_UNIFORM_HEIGHT__PX - 50
                : (postInfo.thumbnailHeight * IMAGECARD_WIDTH_PX) / postInfo.thumbnailWidth > IMAGE_MAX_HEIGHT_PX
                ? IMAGE_MAX_HEIGHT_PX
                : (postInfo.thumbnailHeight * IMAGECARD_WIDTH_PX) / postInfo.thumbnailWidth),
          };

          return (
            <StyledImageCard
              setPositionProps={{ ...ImageCardPositionInfos[objectKey] }}
              key={postInfo.id}
              isAutoPlay={isAutoPlay}
              layoutOption={layoutOption}
              postInfo={postInfo}
              imageCardWidth={IMAGECARD_WIDTH_PX}
            />
          );
        })}
    </section>
  );
}
