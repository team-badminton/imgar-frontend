import { SortList } from '@/components';
import React, { ReactElement } from 'react';
import { ProfileCommentsHeaderContainer } from './ProfileComments.styled';
import { ProfileCommentsHeaderState } from './ProfileComments.type';

const commentSort = ['oldest', 'newest', 'best'];

export default function ProfileCommentsHeader({ setSort, sorted }: ProfileCommentsHeaderState): ReactElement {
  return (
    <ProfileCommentsHeaderContainer>
      <SortList setItem={setSort} selectedItem={sorted} items={commentSort} />
    </ProfileCommentsHeaderContainer>
  );
}
