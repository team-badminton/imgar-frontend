import { Loading, MasonryGallery } from '@/components';
import useDomReady from '@/hooks/useDomReady';
import useUpdateLatestQuery from '@/hooks/useUpdateLatestQuery';
import { useTypedDispatch, useTypedSelector } from '@/redux';
import { useAccountFolderPostsQuery } from '@/redux/api';
import { setQueryPage } from '@/redux/slices/listInfoReducer';
import { PostV1Info } from '@/redux/storeTypes';
import React, { ReactElement, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useParams, useLocation } from 'react-router-dom';
import { Notice } from '../Profile.styled';
import { ProfileFavoriteSort } from './ProfileFavorite.type';
import ProfileFavoriteFolders from './ProfileFavoriteFolders';
import ProfileFavoriteHeader from './ProfileFavoriteHeader';

export default function ProfileFavorite(): ReactElement {
  const [sort, setSort] = useState<ProfileFavoriteSort>('oldest');
  const { pathname } = useLocation();
  const { folderId, username } = useParams<{ folderId: string; username: string }>();
  const page = useTypedSelector(state => state.listInfo.queryPage);
  const option = { folderId, username, sort, page };
  const { data } = useAccountFolderPostsQuery(option);
  const [posts, setPosts] = React.useState<PostV1Info[]>([]);
  const [isFetching, setIsFetching] = React.useState<boolean>(false);
  const domReady = useDomReady();
  useUpdateLatestQuery('userFavorites', option);

  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(setQueryPage(0));
    setIsFetching(true);
  }, [pathname]);

  useEffect(() => {
    setIsFetching(true);
  }, [sort]);

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
          <>
            <ProfileFavoriteFolders />
            <ProfileFavoriteHeader
              setSort={n => {
                setSort(n);
                dispatch(setQueryPage(0));
                window.scrollTo(0, 0);
              }}
              sorted={sort}
            />
          </>,
          document.querySelector('.ProfileCover'),
        )}
      {isFetching ? (
        <Loading />
      ) : posts.length ? (
        <MasonryGallery posts={posts} />
      ) : (
        <Notice>This Imgarian doesn&apos;t have any favorites yet.</Notice>
      )}
    </>
  );
}
