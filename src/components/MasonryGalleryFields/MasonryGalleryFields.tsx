import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux';
import { DropDownList } from '@/components';
import { setCategory, setSortOption } from '@/redux/slices/listInfoReducer';
import { GalleryQuery } from '@/redux/api/types/queries';

export default function MasonryGalleryFields(): ReactElement {
  // MASONRY GALLERY 헤더의 최소 너비 설정
  const categoryList: GalleryQuery['section'][] = ['mostViral', 'userSubmitted', 'highestScoring'];
  const sortOptionList: { [key in GalleryQuery['section']]: GalleryQuery['sort'][] | GalleryQuery['window'][] } = {
    mostViral: ['newest', 'popular', 'best', 'random'],
    userSubmitted: ['popular', 'rising', 'newest'],
    highestScoring: ['day', 'week', 'month', 'year', 'all'],
  };

  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.listInfo.category);

  const handleSetCategory =
    ($selectedLi: Element, $selectedChild: ReactElement) => (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
      const selectedCategory = $selectedChild.props.children;
      const selectedSort = sortOptionList[selectedCategory as GalleryQuery['section']][0];
      dispatch(setCategory(selectedCategory as GalleryQuery['section']));
      dispatch(setSortOption(selectedSort as GalleryQuery['sort']));
    };

  const handleSetSortOption =
    ($selectedLi: Element, $selectedChild: ReactElement) => (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
      const newSortOption = $selectedChild.props.children;
      dispatch(setSortOption(newSortOption as GalleryQuery['sort']));
    };

  return (
    <>
      <div
        css={`
          display: flex;
          justify-content: space-between;
          width: 100%;
        `}
      >
        <DropDownList
          handlerOption={{
            useType: 'selectBox',
            handleDropDownList: handleSetCategory,
          }}
        >
          {categoryList.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </DropDownList>
        <DropDownList
          handlerOption={{
            useType: 'selectBox',
            handleDropDownList: handleSetSortOption,
          }}
        >
          {sortOptionList[category].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </DropDownList>
      </div>
    </>
  );
}
