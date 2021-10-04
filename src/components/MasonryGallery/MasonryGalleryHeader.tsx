import React, { ReactElement } from 'react';
import { toggleAutoPlay, toggleView } from '@/redux/slices/listInfoReducer';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as AnimationPlayIconSVG } from '@/assets/Icon/animationPlayIcon.svg';
import { ReactComponent as UniformLayoutIconSVG } from '@/assets/Icon/uniformLayoutIcon.svg';
import { DropDownList } from '@/components';
import { RootState } from '@/redux';
import { pxToRem } from '@/util/styleUtils';

export default function MasonryGalleryHeader(): ReactElement {
  const dispatch = useDispatch();
  const handleAnimationToggle = () => {
    dispatch(toggleAutoPlay());
  };
  const handleLayoutToggle = () => {
    dispatch(toggleView());
  };
  const masonryGalleryWidth = useSelector((state: RootState) => state.display.masonryGalleryWidth);
  const MASONRY_GALLERY_HEADER_MIN_WIDTH__PX = 450;
  const categoryList = ['MOST VIRAL', 'USER SUBMITTED', 'HIGHEST SCORING'];

  const sortOptionList = ['NEWEST', 'POPULAR', 'BEST', 'RANDOM'];

  return (
    <div
      css={`
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        width: ${pxToRem(masonryGalleryWidth)};
        min-width: ${pxToRem(MASONRY_GALLERY_HEADER_MIN_WIDTH__PX)};
      `}
    >
      <div
        css={`
          display: flex;
          justify-content: space-between;
          width: 100%;
        `}
      >
        <DropDownList dropdownType="category" dropdownItemList={categoryList} />
        <DropDownList dropdownType="sortOption" dropdownItemList={sortOptionList} />
      </div>
      <div>
        <button onClick={handleAnimationToggle}>
          <AnimationPlayIconSVG />
        </button>
        <button onClick={handleLayoutToggle}>
          <UniformLayoutIconSVG />
        </button>
      </div>
    </div>
  );
}
