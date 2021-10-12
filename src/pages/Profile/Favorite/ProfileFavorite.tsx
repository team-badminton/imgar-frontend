import { Loading, MasonryGallery } from '@/components';
import useDomReady from '@/hooks/useDomReady';
import { useAccountFolderPostsQuery } from '@/redux/api';
import React, { ReactElement, useState } from 'react';
import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';
import { ProfileFavoriteSort } from './ProfileFavorite.type';
import ProfileFavoriteFolders from './ProfileFavoriteFolders';
import ProfileFavoriteHeader from './ProfileFavoriteHeader';

export default function ProfileFavorite(): ReactElement {
  const [sort, setSort] = useState<ProfileFavoriteSort>('oldest');
  const { folderId, username } = useParams<{ folderId: string; username: string }>();
  const { data, isFetching } = useAccountFolderPostsQuery({ folderId, username, sort });
  const domReady = useDomReady();
  return (
    <>
      {domReady &&
        createPortal(
          <>
            <ProfileFavoriteFolders />
            <ProfileFavoriteHeader setSort={setSort} sorted={sort} />
          </>,
          document.querySelector('.ProfileCover'),
        )}
      {isFetching ? <Loading /> : <MasonryGallery posts={data} />}
    </>
  );
}
