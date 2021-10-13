import { Loading, MasonryGallery } from '@/components';
import useDomReady from '@/hooks/useDomReady';
import { useTypedDispatch, useTypedSelector } from '@/redux';
import { useAccountPostsQuery } from '@/redux/api';
import { setQueryPage } from '@/redux/slices/listInfoReducer';
import { PostV1Info } from '@/redux/storeTypes';
import React, { ReactElement, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';
import { Notice } from '../Profile.styled';
import { ProfilePostSort } from './ProfilePosts.type';
import ProfilePostsHeader from './ProfilePostsHeader';

export default function ProfilePosts(): ReactElement {
  const { username } = useParams<{ username: string }>();
  const [sort, setSort] = React.useState<ProfilePostSort>('newest');
  const [posts, setPosts] = React.useState<PostV1Info[]>([]);
  const [isFetching, setIsFetching] = React.useState<boolean>(false);
  // const [isPageFetching, setIsPageFetching] = React.useState<boolean>(false);
  const page = useTypedSelector(state => state.listInfo.queryPage);
  const { data } = useAccountPostsQuery({ username, sort, page });
  const domReady = useDomReady();

  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(setQueryPage(0));
  }, []);

  useEffect(() => {
    setIsFetching(true);
  }, [sort]);

  // useEffect(() => {
  //   setIsPageFetching(true);
  // }, [page]);

  useEffect(() => {
    if (!data) {
      return;
    }
    if (page === 0) {
      setPosts(data);
      setIsFetching(false);
      // setIsPageFetching(false);
    }
    if (page > 0) {
      setPosts(currPosts => [...currPosts, ...data]);
      // setIsPageFetching(false);
    }
  }, [data]);

  return (
    <>
      {domReady &&
        createPortal(
          <ProfilePostsHeader
            setSort={n => {
              setSort(n);
              dispatch(setQueryPage(0));
              window.scrollTo(0, 0);
            }}
            sorted={sort}
          />,
          document.querySelector('.ProfileCover'),
        )}
      {isFetching ? (
        <Loading />
      ) : posts.length ? (
        <MasonryGallery posts={posts} />
      ) : (
        <Notice>This user has no posts</Notice>
      )}
    </>
  );
}
