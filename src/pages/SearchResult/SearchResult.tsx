import { Loading, Logo, MainContainer, MasonryGallery, Search } from '@/components';
import useUpdateLatestQuery from '@/hooks/useUpdateLatestQuery';
import { useTypedDispatch, useTypedSelector } from '@/redux';
import { useSearchQuery } from '@/redux/api';
import { GallerySearchQuery, SearchUrlQuery } from '@/redux/api/types/queries';
import { masonryGalleryWidthSelector } from '@/redux/slices/displayReducer';
import { setQueryPage } from '@/redux/slices/listInfoReducer';
import { PostV1Info } from '@/redux/storeTypes';
import { pxToRem } from '@/util/styleUtils';
import React, { ReactElement, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Notice } from '../Profile/Profile.styled';
import { SearchResultPostSort1, SearchResultPostSort2 } from './SearchResult.type';
import SearchResultCover from './SearchResultCover';
import SearchResultHeader from './SearchResultHeader';

const sort1Query = {
  highestScoring: 'top',
  mostViral: 'viral',
  newest: 'time',
};

function CustomHeader(): ReactElement {
  return (
    <div
      css={`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: ${pxToRem(75)};
        padding: 0 ${pxToRem(15)};
      `}
    >
      <Logo to="/" icon />
      <Search
        css={`
          @media (max-width: ${pxToRem(1200)}) {
            display: none;
          }
        `}
      />
      <div
        css={`
          width: 1px;
        `}
      />
    </div>
  );
}

export default function SearchResult(): ReactElement {
  const location = useLocation();
  const searchQuery = useMemo<SearchUrlQuery>(() => {
    const urlParams = new URLSearchParams(location.search);
    return {
      q: urlParams.get('q'),
      q_all: urlParams.get('q_all'),
      q_any: urlParams.get('q_any'),
      q_exactly: urlParams.get('q_exactly'),
      q_not: urlParams.get('q_not'),
      q_tags: urlParams.get('q_tags'),
      q_type: urlParams.get('q_type'),
      q_size_px: urlParams.get('q_size_px'),
      q_size_mpx: urlParams.get('q_size_mpx'),
      q_size_is_mpx: urlParams.get('q_size_is_mpx'),
    };
  }, [location.search]);
  const page = useTypedSelector(state => state.listInfo.queryPage);
  const [posts, setPosts] = React.useState<PostV1Info[]>([]);

  const [sort1, setSort1] = React.useState<SearchResultPostSort1>('highestScoring');
  const [sort2, setSort2] = React.useState<SearchResultPostSort2>('all');

  const [isFetching, setIsFetching] = React.useState<boolean>(false);
  const galleryWidth = useTypedSelector(masonryGalleryWidthSelector);
  const option = {
    query: searchQuery,
    page,
    sort: sort1Query[sort1] as GallerySearchQuery['sort'],
    window: sort1Query[sort1] === 'top' ? sort2 : null,
  };
  const { data } = useSearchQuery(option);

  useUpdateLatestQuery('search', option);

  const dispatch = useTypedDispatch();

  const sortArray = useMemo(() => [sort1, sort2], [sort1, sort2]);
  const setSortArray = useMemo(
    () => [
      (sort: SearchResultPostSort1) => {
        setSort1(sort), dispatch(setQueryPage(0));
      },
      (sort: SearchResultPostSort2) => {
        setSort2(sort), dispatch(setQueryPage(0));
      },
    ],
    [setSort1, setSort2],
  );

  useEffect(() => {
    dispatch(setQueryPage(0));
    setIsFetching(true);
  }, [location.search]);

  useEffect(() => {
    setIsFetching(true);
  }, [sort1, sort2]);

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
    <MainContainer
      headerCover={<SearchResultCover isFetching={isFetching} />}
      headerBackground="https://s.imgur.com/desktop-assets/desktop-assets/homebg.e52b5cdf24f83bcd55f9f1318855f2ef.png"
      containerWidth={galleryWidth}
      customHeader={<CustomHeader />}
    >
      <SearchResultHeader sorted={sortArray} setSort={setSortArray} />
      {isFetching ? <Loading /> : posts.length ? <MasonryGallery posts={posts} /> : <Notice>No search results</Notice>}
    </MainContainer>
  );
}
