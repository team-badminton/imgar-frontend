import { Loading, MasonryGallery } from '@/components';
import { useAccountFolderPostsQuery } from '@/redux/api';
import React, { ReactElement } from 'react';
import { Route, Switch, useLocation, useParams, useRouteMatch } from 'react-router-dom';

export default function ProfileFavorite(): ReactElement {
  const { folderId, username } = useParams<{ folderId: string; username: string }>();
  const { data, isLoading } = useAccountFolderPostsQuery({ folderId, username });
  console.log(data);

  return isLoading ? <Loading /> : <MasonryGallery posts={data} />;
}
