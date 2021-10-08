import {
  IMAGECARD_UNIFORM_HEIGHT__PX,
  IMAGECARD_WIDTH_PX,
  IMAGE_MAX_HEIGHT_PX,
} from '@/components/ImageCard/ImageCard.styled';
import { useTypedSelector } from '@/redux';
import React, { ReactElement, useLayoutEffect, useState } from 'react';
// import { useHistory, useLocation, useParams } from 'react-router-dom';
import { COLUMN_GAP__PX, StyledImageCard } from './MasonryGallery.styled';
import { MasonryGalleryProps, SetPositionProps } from './MasonryGallery.type';

export default function MasonryGallery({ posts }: MasonryGalleryProps): ReactElement {
  // 리덕스 전역 상태
  const isAutoPlay = useTypedSelector(state => state.listInfo.autoPlay);
  const layoutOption = useTypedSelector(state => state.listInfo.layout);
  const [totalColumn, setTotalColumn] = useState<number>();
  const containerRef = React.useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      const containerWidth = containerRef.current.clientWidth;
      const MAX_COLUMN_NUM = 9;
      // 현재 화면 너비에 열이 더 들어갈 수 있어도 남겨둘 양쪽 최소 여백 설정
      const MIN_MARGIN__PX = 0;

      // 현재 화면 너비에 들어갈 수 있는 전체 열 수 계산
      const COMPUTED_COLUMN_NUM = Math.floor(
        (containerWidth - MIN_MARGIN__PX + COLUMN_GAP__PX) / (IMAGECARD_WIDTH_PX + COLUMN_GAP__PX),
      );
      // 전체 열 수가 최대 개수를 넘지 않도록 조절
      const LAYOUT_TOTAL_COLUMN_NUM = COMPUTED_COLUMN_NUM > MAX_COLUMN_NUM ? MAX_COLUMN_NUM : COMPUTED_COLUMN_NUM;

      setTotalColumn(LAYOUT_TOTAL_COLUMN_NUM);
    });

    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  const ImageCardPositionInfos: {
    [key: string]: SetPositionProps;
  } = {};

  return (
    <section
      css={`
        position: relative;
        margin: 0 auto;
        width: 100%;
      `}
      ref={containerRef}
    >
      {posts.map((postInfo, index) => {
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
            isLazyLoading={index < 20 ? false : true}
          />
        );
      })}
    </section>
  );
}
