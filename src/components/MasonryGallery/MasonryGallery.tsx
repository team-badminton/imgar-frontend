import React, { ReactElement, useState } from 'react';
import { toggleAutoPlay } from '@/redux/slices/listInfoReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux';
// import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useGalleryQuery } from '@/redux/api/v3';
import { IMAGE_MAX_HEIGHT_PX } from '@/components/ImageCard/ImageCard.styled';
import { IMAGECARD_WIDTH_PX, LAYOUT_TOTAL_COLUMN_NUM, StyledImageCard, StyledSection } from './MasonryGallery.styled';
import { SetPositionProps } from './MasonryGallery.type';
import { ReactComponent as AnimationPlayIconSVG } from '@/assets/Icon/animationPlayIcon.svg';
import { DropDownList } from '@/components';

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

  const dropdowmItemList = ['MOST VIRAL', 'USER SUBMITTED', 'HIGHEST SCORING'];

  const [category, setCategory] = useState<string>(dropdowmItemList[0]);

  const handleCategory = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const $target = e.target as HTMLElement;
    const $li = $target.closest('.listItem');
    if (!$li) {
      return;
    }
    const $prevSelected = document.querySelector('.selected');
    $prevSelected.classList.remove('selected');
    $li.classList.add('selected');
    setCategory($li.children[0].children[0].textContent);
  };

  return (
    <>
      <DropDownList dropdownHeader={category} dropdownItemList={dropdowmItemList} buttonOnClick={handleCategory} />
      <button onClick={handleToggle}>
        <AnimationPlayIconSVG />
      </button>
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
