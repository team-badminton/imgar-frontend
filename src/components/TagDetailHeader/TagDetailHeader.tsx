import { ControlHeaderContainer } from '@/pages/SearchResult/SearchResult.styled';
import { useTypedSelector } from '@/redux';
import React, { ReactElement } from 'react';
import { MasonryGalleryOptions, SortList } from '..';
import { StyledDiv, StyledTadDetailHeader } from './TagDetailHeader.styled';
import { TagDetailHeaderProps } from './TagDetailHeader.type';

const sortOptionList = ['newest', 'popular', 'best'];

export default function TagDetailHeader({ setSort, sorted }: TagDetailHeaderProps): ReactElement {
  const containerWidth = useTypedSelector(state => state.display.masonryGalleryWidth);
  return (
    <ControlHeaderContainer
      isMinWidth={containerWidth <= 240}
      css={`
        justify-content: flex-end;
      `}
    >
      <StyledTadDetailHeader>
        <SortList setItem={setSort[0]} selectedItem={sorted[0]} items={sortOptionList} />
      </StyledTadDetailHeader>
      <MasonryGalleryOptions />
    </ControlHeaderContainer>
  );
}
