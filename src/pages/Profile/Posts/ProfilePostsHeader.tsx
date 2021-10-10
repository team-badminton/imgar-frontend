import { DropDownList, MasonryGalleryOptions } from '@/components';
import React, { ReactElement } from 'react';
import { ProfilePostsHeaderContainer, ProfilePostsHeaderTitle } from './ProfilePosts.styled';
import { ProfilePostSort } from './ProfilePosts.type';

function ProfilePostsFields({ setSort }: { setSort: (s: ProfilePostSort) => void }): ReactElement {
  const sortList = ['oldest', 'newest', 'best'];

  const handleSetSort = (_: never, item: ReactElement) => () => {
    setSort(item.props.children.toLowerCase());
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
            handleDropDownList: handleSetSort,
          }}
        >
          {sortList
            .map(sortOption => sortOption)
            .map((sortOption, index) => (
              <span key={index}>{sortOption.toUpperCase()}</span>
            ))}
        </DropDownList>
      </div>
    </>
  );
}

export default function ProfilePostsHeader({ setSort }: { setSort: (s: ProfilePostSort) => void }): ReactElement {
  return (
    <ProfilePostsHeaderContainer>
      <ProfilePostsHeaderTitle>PUBLIC</ProfilePostsHeaderTitle>
      <div
        css={`
          display: flex;
        `}
      >
        <ProfilePostsFields setSort={setSort} />
        <MasonryGalleryOptions />
      </div>
    </ProfilePostsHeaderContainer>
  );
}
