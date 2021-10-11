import { Loading, MasonryGallery } from '@/components';
import { useAccountPostsQuery } from '@/redux/api';
import React, { ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';
import { ProfilePostSort } from './ProfilePosts.type';
import ProfilePostsHeader from './ProfilePostsHeader';

export default function ProfilePosts(): ReactElement {
  const { username } = useParams<{ username: string }>();
  const [sort, setSort] = React.useState<ProfilePostSort>('newest');
  const { data, isLoading } = useAccountPostsQuery({ username, sort });
  return isLoading ? (
    <Loading />
  ) : (
    <>
      {createPortal(<ProfilePostsHeader setSort={setSort} />, document.querySelector('.ProfileCover'))}
      {isLoading ? <Loading /> : <MasonryGallery posts={data} />}
    </>
  );
}
