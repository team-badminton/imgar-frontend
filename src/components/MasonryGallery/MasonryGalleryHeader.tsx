import React, { ReactElement } from 'react';
import { toggleAutoPlay, toggleView } from '@/redux/slices/listInfoReducer';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as AnimationPlayIconSVG } from '@/assets/Icon/animationPlayIcon.svg';
import { ReactComponent as UniformLayoutIconSVG } from '@/assets/Icon/uniformLayoutIcon.svg';
import { DropDownList } from '@/components';
import { RootState } from '@/redux';
import { pxToRem } from '@/util/styleUtils';
import { setCategory, setSortOption } from '@/redux/slices/listInfoReducer';
import { GalleryQuery } from '@/redux/api/types/queries';

export default function MasonryGalleryHeader(): ReactElement {
  // MASONRY GALLERY 헤더의 최소 너비 설정
  const MASONRY_GALLERY_HEADER_MIN_WIDTH__PX = 450;
  const categoryList: GalleryQuery['section'][] = ['mostViral', 'userSubmitted', 'highestScoring'];
  const sortOptionList: { [key in GalleryQuery['section']]: GalleryQuery['sort'][] | GalleryQuery['window'][] } = {
    mostViral: ['newest', 'popular', 'best', 'random'],
    userSubmitted: ['popular', 'rising', 'newest'],
    highestScoring: ['day', 'week', 'month', 'year', 'all'],
  };

  const masonryGalleryWidth = useSelector((state: RootState) => state.display.masonryGalleryWidth);

  const dispatch = useDispatch();
  const handleAnimationToggle = () => {
    dispatch(toggleAutoPlay());
  };
  const handleLayoutToggle = () => {
    dispatch(toggleView());
  };

  const category = useSelector((state: RootState) => state.listInfo.category);
  const sortOption = useSelector((state: RootState) => state.listInfo.sortOption);

  const handleSetCategory = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const $target = e.target as HTMLElement;
    const $li = $target.closest('.listItem');
    if (!$li) {
      return;
    }
    const $prevSelected = document.querySelector('.selected');
    $prevSelected.classList.remove('selected');
    $li.classList.add('selected');

    const selectedCategory = $li.children[0].children[0].textContent;

    const selectedSort = sortOptionList[selectedCategory as GalleryQuery['section']][0];
    dispatch(setCategory(selectedCategory as GalleryQuery['section']));
    dispatch(setSortOption(selectedSort as GalleryQuery['sort']));
  };

  const handleSetSortOption = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const $target = e.target as HTMLElement;
    const $li = $target.closest('.listItem');
    if (!$li) {
      return;
    }
    const $prevSelected = document.querySelector('.selected');
    $prevSelected.classList.remove('selected');
    $li.classList.add('selected');

    const newSortOption = $li.children[0].children[0].textContent;
    dispatch(setSortOption(newSortOption as GalleryQuery['sort']));
  };

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
        <DropDownList dropdownHeader={category} handleDropDownList={handleSetCategory}>
          {categoryList.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </DropDownList>
        <DropDownList dropdownHeader={sortOption} handleDropDownList={handleSetSortOption}>
          {sortOptionList[category].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </DropDownList>
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
