import { MasonryGalleryOptions, SortList } from '@/components';
import { useTypedSelector } from '@/redux';
import React, { ReactElement } from 'react';
import { ControlHeaderContainer, SearchResultHeaderTitle } from './SearchResult.styled';
import { SearchResultPostHeaderState } from './SearchResult.type';

const searchSort1 = ['highestScoring', 'mostViral', 'newest'];
const searchSort2 = ['all', 'day', 'week', 'month', 'year'];

export default function SearchResultHeader({ setSort, sorted }: SearchResultPostHeaderState): ReactElement {
  const containerWidth = useTypedSelector(state => state.display.masonryGalleryWidth);
  return (
    <ControlHeaderContainer isMinWidth={containerWidth <= 240}>
      <SearchResultHeaderTitle>
        <SortList setItem={setSort[0]} selectedItem={sorted[0]} items={searchSort1} />
      </SearchResultHeaderTitle>
      <div
        css={`
          display: flex;
        `}
      >
        {sorted[0] === 'highestScoring' ? (
          <SortList setItem={setSort[1]} selectedItem={sorted[1]} items={searchSort2} />
        ) : null}
        <MasonryGalleryOptions />
      </div>
    </ControlHeaderContainer>
  );
}
