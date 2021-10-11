import { SortList, MasonryGalleryOptions } from '@/components';
import { useAccountFoldersQuery } from '@/redux/api';
import React, { ReactElement } from 'react';
import { useRouteMatch } from 'react-router';
import { ProfileFavoriteHeaderContainer, ProfileFavoriteHeaderTitle } from './ProfileFavorite.styled';
import { ProfileFavoriteHeaderState } from './ProfileFavorite.type';

const favoriteSort = ['newest', 'oldest'];

export default function ProfileFavoriteHeader({ setSort, sorted }: ProfileFavoriteHeaderState): ReactElement {
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
        <SortList items={favoriteSort} setItem={setSort} selectedItem={sorted} />
        <MasonryGalleryOptions />
      </div>
    </ProfileFavoriteHeaderContainer>
  );
}
