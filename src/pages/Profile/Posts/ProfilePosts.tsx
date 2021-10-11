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
  const { data, isFetching } = useAccountPostsQuery({ username, sort });
  return (
    <>
      {createPortal(<ProfilePostsHeader setSort={setSort} sorted={sort} />, document.querySelector('.ProfileCover'))}
      {isFetching ? <Loading /> : <MasonryGallery posts={data} />}
    </>
  );
}
