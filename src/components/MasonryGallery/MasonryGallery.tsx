import React, { Fragment, ReactElement, useEffect, useLayoutEffect, useState } from 'react';
import { useTypedDispatch, useTypedSelector } from '@/redux';
import { useInView } from 'react-intersection-observer';
import { pxToRem } from '@/util/styleUtils';
import { setQueryPage } from '@/redux/slices/listInfoReducer';
import {
  IMAGECARD_HEIGHT_EXCLUDING_IMAGE__REM,
  IMAGECARD_UNIFORM_HEIGHT__PX,
  IMAGECARD_WIDTH_PX,
  IMAGE_MAX_HEIGHT_PX,
} from '@/components/ImageCard/ImageCard.styled';
import { ImageCardPositionInfosType, MasonryGalleryProps } from './MasonryGallery.type';
import { COLUMN_GAP__PX, ROW_GAP__PX, StyledImageCard, StyledSection } from './MasonryGallery.styled';

export default function MasonryGallery({ posts, id }: MasonryGalleryProps): ReactElement {
  const dispatch = useTypedDispatch();
  // 리덕스 전역 상태
  const queryPage = useTypedSelector(state => state.listInfo.queryPage);
  const isAutoPlay = useTypedSelector(state => state.listInfo.autoPlay);
  const layoutOption = useTypedSelector(state => state.listInfo.layout);

  // 상태
  const [totalColumn, setTotalColumn] = useState<number>();

  // Ref
  const containerRef = React.useRef<HTMLElement>(null);
  const { ref: observerRef, inView: observerInView } = useInView();

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

  useEffect(() => {
    if (observerInView) {
      dispatch(setQueryPage(queryPage + 1));
    }
  }, [observerInView]);

  // ImageCard의 transform x좌표, y좌표 계산 결과를 저장하기 위한 객체
  const ImageCardPositionInfos: ImageCardPositionInfosType = {};

  useEffect(() => {
    containerRef.current.style.height = pxToRem(document.body.scrollHeight - window.innerHeight);
  }, [document.body.scrollHeight]);

  return (
    <>
      <StyledSection ref={containerRef} id={id}>
        {posts.map((postInfo, index) => {
          const row = Math.floor(index / totalColumn);
          const column = index % totalColumn;
          const objectKey = '' + row + column;
          const aboveImageCardObjectKey = '' + (row - 1) + column;
          const imageCardHeight =
            layoutOption === 'uniform'
              ? IMAGECARD_UNIFORM_HEIGHT__PX - 70
              : (postInfo.thumbnailHeight * IMAGECARD_WIDTH_PX) / postInfo.thumbnailWidth > IMAGE_MAX_HEIGHT_PX
              ? IMAGE_MAX_HEIGHT_PX
              : (postInfo.thumbnailHeight * IMAGECARD_WIDTH_PX) / postInfo.thumbnailWidth;
          const sumOfAboveImageHeightPx = ImageCardPositionInfos[aboveImageCardObjectKey]
            ? ImageCardPositionInfos[aboveImageCardObjectKey].sumOfImageHeightPx
            : 0;
          ImageCardPositionInfos[objectKey] = {
            column,
            row,
            sumOfAboveImageHeightPx,
            sumOfImageHeightPx: sumOfAboveImageHeightPx + imageCardHeight,
          };

          return (
            <Fragment key={postInfo.id}>
              <StyledImageCard
                setPositionProps={{ ...ImageCardPositionInfos[objectKey] }}
                isAutoPlay={isAutoPlay}
                layoutOption={layoutOption}
                postInfo={postInfo}
                imageCardWidth={IMAGECARD_WIDTH_PX}
                imageCardHeight={imageCardHeight}
                isLazyLoading={false}
              />
              {index === posts.length - 1 && (
                <div
                  style={{
                    width: '100px',
                    transform: `translate3d(
                      ${pxToRem(ImageCardPositionInfos[objectKey].column * (IMAGECARD_WIDTH_PX + COLUMN_GAP__PX))},
                      ${
                        ImageCardPositionInfos[objectKey].row *
                          (parseFloat(IMAGECARD_HEIGHT_EXCLUDING_IMAGE__REM) + parseFloat(pxToRem(ROW_GAP__PX))) +
                        parseFloat(pxToRem(ImageCardPositionInfos[objectKey].sumOfImageHeightPx)) +
                        'rem'
                      },
                      0
                    )`,
                  }}
                  ref={observerRef}
                ></div>
              )}
            </Fragment>
          );
        })}
      </StyledSection>
    </>
  );
}
