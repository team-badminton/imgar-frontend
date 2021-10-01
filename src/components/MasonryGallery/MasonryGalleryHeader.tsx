import React, { ReactElement } from 'react';
import { toggleAutoPlay } from '@/redux/slices/listInfoReducer';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as AnimationPlayIconSVG } from '@/assets/Icon/animationPlayIcon.svg';
import { DropDownList } from '@/components';
import { RootState } from '@/redux';
import { pxToRem } from '@/util/styleUtils';

export default function MasonryGalleryHeader(): ReactElement {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleAutoPlay());
  };
  const masonryGalleryWidth = useSelector((state: RootState) => state.display.masonryGalleryWidth);

  const categoryList = ['MOST VIRAL', 'USER SUBMITTED', 'HIGHEST SCORING'];

  const sortOptionList = ['NEWEST', 'POPULAR', 'BEST', 'RANDOM'];

  return (
    <div
      css={`
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        width: ${pxToRem(masonryGalleryWidth)};
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
        <button onClick={handleToggle}>
          <AnimationPlayIconSVG />
        </button>
      </div>
    </div>
  );
}
