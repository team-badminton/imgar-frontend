import React, { ReactElement, ReactNode, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useTypedDispatch } from '@/redux';
import { DropDownList } from '@/components';
import { setCategory, setSortOption, setWindowOption } from '@/redux/slices/listInfoReducer';
import { GalleryQuery } from '@/redux/api/types/queries';

const galleryQueryKeyToAllUpperCase = (
  galleryQueryKey: GalleryQuery['section'] | GalleryQuery['sort'] | GalleryQuery['window'],
) => {
  const words = galleryQueryKey.split(/(?=[A-Z])/);
  return words.map(word => word.toUpperCase()).join(' ');
};

const allUpperCaseToGalleryQueryKey = (
  allUpperCase: string,
): GalleryQuery['section'] | GalleryQuery['sort'][] | GalleryQuery['window'][] => {
  const words = allUpperCase.split(' ');
  const capitalizatedWords = words.map(word => word[0] + word.slice(1, word.length).toLowerCase()).join('');
  return (capitalizatedWords[0].toLowerCase() + capitalizatedWords.slice(1, capitalizatedWords.length)) as
    | GalleryQuery['section']
    | GalleryQuery['sort'][]
    | GalleryQuery['window'][];
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

  const dispatch = useTypedDispatch();
  const category = useSelector((state: RootState) => state.listInfo.category);

  const handleSetCategory =
    ($selectedLi: HTMLLIElement, $selectedChild: ReactElement) =>
    (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
      const selectedCategory = allUpperCaseToGalleryQueryKey($selectedChild.props.children);
      const selectedSort = allUpperCaseToGalleryQueryKey(
        sortOptionList[selectedCategory as GalleryQuery['section']][0],
      );
      dispatch(setCategory(selectedCategory as GalleryQuery['section']));
      dispatch(setSortOption(selectedSort as GalleryQuery['sort']));
    };

  const handleSetSortOrWindowOption =
    ($selectedLi: HTMLLIElement, $selectedChild: ReactElement) =>
    (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
      const newSortOrWindowOption = allUpperCaseToGalleryQueryKey($selectedChild.props.children);
      if (category === 'highestScoring') {
        dispatch(setWindowOption(newSortOrWindowOption as GalleryQuery['window']));
      } else {
        dispatch(setSortOption(newSortOrWindowOption as GalleryQuery['sort']));
      }
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
            handleDropDownList: handleSetSortOrWindowOption,
          }}
        >
          {sortOptionList[category]
            .map(sortOption => galleryQueryKeyToAllUpperCase(sortOption))
            .map((sortOption, index) => (
              <span key={index}>{sortOption}</span>
            ))}
        </DropDownList>
      </div>
    </>
  );
}
