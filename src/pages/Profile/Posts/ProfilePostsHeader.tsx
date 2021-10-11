import { SelectBox, MasonryGalleryOptions, SelectBoxHeader, SortList } from '@/components';
import React, { ReactElement } from 'react';
import { ProfilePostsHeaderContainer, ProfilePostsHeaderTitle } from './ProfilePosts.styled';
import { ProfilePostHeaderState, ProfilePostSort } from './ProfilePosts.type';

const postSort = ['newest', 'oldest', 'best'];

export default function ProfilePostsHeader({ setSort, sorted }: ProfilePostHeaderState): ReactElement {
  return (
    <ProfilePostsHeaderContainer>
      <ProfilePostsHeaderTitle>PUBLIC</ProfilePostsHeaderTitle>
      <div
        css={`
          display: flex;
        `}
      >
        <SortList setItem={setSort} selectedItem={sorted} items={postSort} />
        <MasonryGalleryOptions />
      </div>
    </ProfilePostsHeaderContainer>
  );
}
