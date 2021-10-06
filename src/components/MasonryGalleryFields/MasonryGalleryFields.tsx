import React, { ReactElement, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux';
import { DropDownList } from '@/components';
import { setCategory, setSortOption } from '@/redux/slices/listInfoReducer';
import { GalleryQuery } from '@/redux/api/types/queries';

const galleryQueryKeyToAllUpperCase = (galleryQueryKey: GalleryQuery['section']) => {
  const words = galleryQueryKey.split(/(?=[A-Z])/);
  return words.map(word => word.toUpperCase()).join(' ');
};

const allUpperCaseToGalleryQueryKey = (allUpperCase: string): GalleryQuery['section'] => {
  const words = allUpperCase.split(' ');
  const capitalizatedWords = words.map(word => word[0] + word.slice(1, word.length).toLowerCase()).join('');
  return (capitalizatedWords[0].toLowerCase() +
    capitalizatedWords.slice(1, capitalizatedWords.length)) as GalleryQuery['section'];
};

export default function MasonryGalleryFields(): ReactElement {
  // MASONRY GALLERY 헤더의 최소 너비 설정
  const categoryList: GalleryQuery['section'][] = ['mostViral', 'userSubmitted', 'highestScoring'];
  const sortOptionList: { [key in GalleryQuery['section']]: GalleryQuery['sort'][] | GalleryQuery['window'][] } = {
    mostViral: ['newest', 'popular', 'best', 'random'],
    userSubmitted: ['popular', 'rising', 'newest'],
    highestScoring: ['day', 'week', 'month', 'year', 'all'],
  };

  const categoryListReactElement = useMemo(
    () =>
      categoryList
        .map(category => galleryQueryKeyToAllUpperCase(category))
        .map((item, index) => <span key={index}>{item}</span>),
    [],
  );

  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.listInfo.category);

  const handleSetCategory =
    ($selectedLi: Element, $selectedChild: ReactElement) => (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
      const selectedCategory = allUpperCaseToGalleryQueryKey($selectedChild.props.children);
      console.log(selectedCategory);
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
          {categoryListReactElement}
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
