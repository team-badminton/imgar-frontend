import React, { ReactElement, useMemo, useState } from 'react';
import { useTypedSelector, useTypedDispatch } from '@/redux';
import { SelectBox, SelectBoxHeader, SelectBoxList } from '@/components';
import { setCategory, setSortOption, setWindowOption } from '@/redux/slices/listInfoReducer';
import { GalleryQuery } from '@/redux/api/types/queries';
import { createRandomHash } from '@/util/formatUtils';

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

const categoryList: GalleryQuery['section'][] = ['mostViral', 'userSubmitted', 'highestScoring'];
const sortOptionList: { [key in GalleryQuery['section']]: GalleryQuery['sort'][] | GalleryQuery['window'][] } = {
  mostViral: ['newest', 'popular', 'best', 'random'],
  userSubmitted: ['popular', 'rising', 'newest'],
  highestScoring: ['day', 'week', 'month', 'year', 'all'],
};

export default function MasonryGalleryFields(): ReactElement {
  const dispatch = useTypedDispatch();
  const category = useTypedSelector(state => state.listInfo.category);
  const sortOption = useTypedSelector(state => state.listInfo.sortOption);
  const windowOption = useTypedSelector(state => state.listInfo.windowOption);

  const displayedCategory = galleryQueryKeyToAllUpperCase(category);
  const displayedSortOption = galleryQueryKeyToAllUpperCase(sortOption);
  const displayedWindowOption = galleryQueryKeyToAllUpperCase(windowOption);

  const handleSetCategory = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const $target = e.target as HTMLElement;
    const $selectedLi = $target.closest('.listItem') as HTMLLIElement;
    if (!$selectedLi) {
      return;
    }

    const selectedCategory = allUpperCaseToGalleryQueryKey($selectedLi.children[0].children[0].textContent);
    const selectedSort = allUpperCaseToGalleryQueryKey(sortOptionList[selectedCategory as GalleryQuery['section']][0]);
    dispatch(setCategory(selectedCategory as GalleryQuery['section']));
    dispatch(setSortOption(selectedSort as GalleryQuery['sort']));
  };

  const handleSetSortOrWindowOption = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const $target = e.target as HTMLElement;
    const $selectedLi = $target.closest('.listItem') as HTMLLIElement;
    if (!$selectedLi) {
      return;
    }

    const newSortOrWindowOption = allUpperCaseToGalleryQueryKey($selectedLi.children[0].children[0].textContent);
    if (category === 'highestScoring') {
      dispatch(setWindowOption(newSortOrWindowOption as GalleryQuery['window']));
    } else {
      dispatch(setSortOption(newSortOrWindowOption as GalleryQuery['sort']));
    }
  };

  const [isShowCategory, setIsShowCategory] = useState<boolean>(false);
  const [isShowSortOrWindowOption, setIsShowSortOrWindowOption] = useState<boolean>(false);

  return (
    <>
      <div
        css={`
          display: flex;
          justify-content: space-between;
          width: 100%;
        `}
      >
        <SelectBox>
          <SelectBoxHeader onClickHandler={() => setIsShowCategory(!isShowCategory)}>
            {displayedCategory}
          </SelectBoxHeader>
          <SelectBoxList onClickHandler={handleSetCategory} isShow={isShowCategory}>
            {categoryList
              .map(category => galleryQueryKeyToAllUpperCase(category))
              .map(item => (
                <button key={createRandomHash()}>
                  <span>{item}</span>
                </button>
              ))}
          </SelectBoxList>
        </SelectBox>
        <SelectBox>
          <SelectBoxHeader onClickHandler={() => setIsShowSortOrWindowOption(!isShowSortOrWindowOption)}>
            {category !== 'highestScoring' ? displayedSortOption : displayedWindowOption}
          </SelectBoxHeader>
          <SelectBoxList onClickHandler={handleSetSortOrWindowOption} isShow={isShowSortOrWindowOption}>
            {sortOptionList[category]
              .map(sortOption => galleryQueryKeyToAllUpperCase(sortOption))
              .map(sortOption => (
                <button key={createRandomHash()}>
                  <span>{sortOption}</span>
                </button>
              ))}
          </SelectBoxList>
        </SelectBox>
      </div>
    </>
  );
}
