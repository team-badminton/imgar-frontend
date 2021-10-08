import { Loading, MasonryGallery } from '@/components';
import { useAccountFolderPostsQuery } from '@/redux/api';
import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';

export default function ProfileFavorite(): ReactElement {
  const { folderId, username } = useParams<{ folderId: string; username: string }>();
  const { data, isFetching } = useAccountFolderPostsQuery({ folderId, username, sort: 'oldest' });

  return isFetching ? <Loading /> : <MasonryGallery posts={data} />;
}
