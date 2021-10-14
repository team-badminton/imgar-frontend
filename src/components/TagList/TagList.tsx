import React, { ReactElement, useState } from 'react';
import { TagCard } from '@/components/index';
import { StyledArticle, StyledMoreTagsButton, StyledTagHeading } from './TagList.styled';
import { TagListProps } from './TagList.type';
import { useTypedSelector } from '@/redux';
import { TAG_GAP, TAG_WIDTH__PX } from '../TagCard/TagCard.styled';

//상수
export const TAGLIST_MARGIN = 100;

export default function TagList({ tags }: TagListProps): ReactElement {
  // 상태
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const innerWidth = useTypedSelector(state => state.display.innerWidth);
  const TAGLIST_COLUMN = Math.floor((innerWidth - TAGLIST_MARGIN) / (TAG_WIDTH__PX + TAG_GAP * 2));
  const TAGS_WIDTH__PX = TAGLIST_COLUMN * (TAG_WIDTH__PX + TAG_GAP * 2);

  return (
    <StyledArticle isOpen={isOpen} articleWidth={TAGS_WIDTH__PX}>
      <StyledTagHeading>EXPLORE TAG</StyledTagHeading>
      {tags &&
        [...tags]
          .sort((a, b) => +b.isFeatured - +a.isFeatured)
          ?.slice(0, !isOpen ? TAGLIST_COLUMN - 1 : tags.length)
          .map(tag => {
            return <TagCard key={tag.name} tag={tag} isFeatured={tag.isFeatured} />;
          })}
      <StyledMoreTagsButton
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? 'LESS TAGS' : 'MORE TAGS'}
      </StyledMoreTagsButton>
    </StyledArticle>
  );
}
