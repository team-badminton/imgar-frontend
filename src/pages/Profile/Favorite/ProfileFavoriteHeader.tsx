import { DropDownList, MasonryGalleryOptions } from '@/components';
import { useAccountFoldersQuery } from '@/redux/api';
import React, { ReactElement } from 'react';
import { useRouteMatch } from 'react-router';
import { ProfileFavoriteHeaderContainer, ProfileFavoriteHeaderTitle } from './ProfileFavorite.styled';
import { ProfileFavoriteSort } from './ProfileFavorite.type';

function ProfileFavoriteFields({ setSort }: { setSort: (s: ProfileFavoriteSort) => void }): ReactElement {
  const sortList = ['oldest', 'newest'];

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

export default function ProfileFavoriteHeader({
  setSort,
}: {
  setSort: (s: ProfileFavoriteSort) => void;
}): ReactElement {
  const match = useRouteMatch<{ username: string; folderId: string }>([
    '/user/:username/favorites/folder/:folderId',
    '/user/:username/favorites',
  ]);
  const { data: folders } = useAccountFoldersQuery(match.params.username);

  const folderName = folders?.find(folder => folder.id + '' === match.params.folderId)?.name;

  return (
    <ProfileFavoriteHeaderContainer>
      <ProfileFavoriteHeaderTitle>{folders && (folderName ?? 'All Favorites')}</ProfileFavoriteHeaderTitle>
      <div
        css={`
          display: flex;
        `}
      >
        <ProfileFavoriteFields setSort={setSort} />
        <MasonryGalleryOptions />
      </div>
    </ProfileFavoriteHeaderContainer>
  );
}
