import React, { ReactElement, useEffect } from 'react';
// import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useGalleryQuery } from '@/redux/api';
import {
  IMAGE_MAX_HEIGHT_PX,
  IMAGECARD_WIDTH_PX,
  IMAGECARD_UNIFORM_HEIGHT__PX,
} from '@/components/ImageCard/ImageCard.styled';
import { COLUMN_GAP__PX, StyledImageCard, StyledSection } from './MasonryGallery.styled';
import { SetPositionProps } from './MasonryGallery.type';
import { RootState } from '@/redux';
import { pxToRem } from '@/util/styleUtils';
import { displayMasonryGalleryWidth } from '@/redux/slices/displayReducer';

export default function MasonryGallery(): ReactElement {
  // 리덕스 전역 상태
  const isAutoPlay = useSelector((state: RootState) => state.listInfo.autoPlay);
  const layoutOption = useSelector((state: RootState) => state.listInfo.layout);
  const innerWidth = useSelector((state: RootState) => state.display.innerWidth);
  /** ---------------------------- 상수 ---------------------------- */
  // 최대 열 개수 설정
  const MAX_COLUMN_NUM = 9;
  // 현재 화면 너비에 열이 더 들어갈 수 있어도 남겨둘 양쪽 최소 여백 설정
  const MIN_MARGIN__PX = 50;

  // 현재 화면 너비에 들어갈 수 있는 전체 열 수 계산
  const COMPUTED_COLUMN_NUM = Math.floor(
    (innerWidth - MIN_MARGIN__PX + COLUMN_GAP__PX) / (IMAGECARD_WIDTH_PX + COLUMN_GAP__PX),
  );
  // 전체 열 수가 최대 개수를 넘지 않도록 조절
  const LAYOUT_TOTAL_COLUMN_NUM = COMPUTED_COLUMN_NUM > MAX_COLUMN_NUM ? MAX_COLUMN_NUM : COMPUTED_COLUMN_NUM;

  // 전체 열 수에 따른 MasonryGallery의 너비 계산
  const MASONRY_GALLERY_WIDTH__PX = LAYOUT_TOTAL_COLUMN_NUM * (IMAGECARD_WIDTH_PX + COLUMN_GAP__PX) - COLUMN_GAP__PX;
  /** ----------------------------------------------------------------- */

  // MasonryGallery의 너비가 변할 때마다 리덕스 상태에 업데이트
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayMasonryGalleryWidth(MASONRY_GALLERY_WIDTH__PX));
  }, [MASONRY_GALLERY_WIDTH__PX]);

  // API 호출
  const category = useSelector((state: RootState) => state.listInfo.category);
  const sortOption = useSelector((state: RootState) => state.listInfo.sortOption);
  const { data: posts } = useGalleryQuery({ section: category, sort: sortOption });
  const ImageCardPositionInfos: {
    [key: string]: SetPositionProps;
  } = {};

  return (
    <>
      <StyledSection
        css={`
          margin: 0 auto;
          width: ${pxToRem(MASONRY_GALLERY_WIDTH__PX)};
        `}
      >
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
      </StyledSection>
    </>
  );
}
