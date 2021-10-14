import React, { ReactElement } from 'react';
import { MasonryGalleryOptions, SortList } from '..';
import { StyledDiv, StyledTadDetailHeader } from './TagDetailHeader.styled';
import { TagDetailHeaderProps } from './TagDetailHeader.type';

const sortOptionList = ['newest', 'popular', 'best'];

export default function TagDetailHeader({ setSort, sorted }: TagDetailHeaderProps): ReactElement {
  return (
    <StyledDiv>
      <StyledTadDetailHeader>
        <SortList setItem={setSort[0]} selectedItem={sorted[0]} items={sortOptionList} />
      </StyledTadDetailHeader>
      <MasonryGalleryOptions />
    </StyledDiv>
  );
}
