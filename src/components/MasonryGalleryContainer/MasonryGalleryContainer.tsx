import React, { ReactElement, useEffect } from 'react';
import { Loading, MasonryGallery } from '@/components/index';
import { useTypedDispatch, useTypedSelector } from '@/redux';
import { useGalleryQuery } from '@/redux/api';
import { getFetch, setPrevPage, setQueryPage } from '@/redux/slices/listInfoReducer';

export default function MasonryGalleryContainer(): ReactElement {
  const dispatch = useTypedDispatch();
  // API 호출
  const category = useTypedSelector(state => state.listInfo.category);
  const sortOption = useTypedSelector(state => state.listInfo.sortOption);
  const windowOption = useTypedSelector(state => state.listInfo.windowOption);
  const queryPage = useTypedSelector(state => state.listInfo.queryPage);
  const prevPage = useTypedSelector(state => state.listInfo.prevPage);

  const { data, isLoading } =
    category !== 'highestScoring'
      ? useGalleryQuery({
          section: category,
          sort: sortOption,
          // window: windowOption,
          page: queryPage,
        })
      : useGalleryQuery({
          section: category,
          // sort: sortOption,
          window: windowOption,
          page: queryPage,
        });

  const posts = useTypedSelector(state => state.listInfo.posts);

  useEffect(() => {
    if (!isLoading) {
      console.log(queryPage, data);
      if (prevPage !== queryPage) {
        dispatch(getFetch([...posts, ...data]));
        dispatch(setPrevPage(prevPage + 1));
      } else {
        dispatch(getFetch([...data]));
      }
    }
  }, [data]);

  return isLoading ? <Loading /> : <MasonryGallery posts={posts} />;
}
