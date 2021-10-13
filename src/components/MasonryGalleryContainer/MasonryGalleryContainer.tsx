import React, { ReactElement, useEffect } from 'react';
import { Loading, MasonryGallery } from '@/components/index';
import { useTypedDispatch, useTypedSelector } from '@/redux';
import { useGalleryQuery } from '@/redux/api';
import { getFetch, setPrevPage, setQueryPage } from '@/redux/slices/listInfoReducer';
import { MasonryGalleryContainerProps } from './MasonryGalleryContainer.type';

export default function MasonryGalleryContainer({ id }: MasonryGalleryContainerProps): ReactElement {
  const dispatch = useTypedDispatch();
  // API 호출
  const category = useTypedSelector(state => state.listInfo.category);
  const sortOption = useTypedSelector(state => state.listInfo.sortOption);
  const windowOption = useTypedSelector(state => state.listInfo.windowOption);
  const queryPage = useTypedSelector(state => state.listInfo.queryPage);
  const prevPage = useTypedSelector(state => state.listInfo.prevPage);
  const posts = useTypedSelector(state => state.listInfo.posts);

  const galleryQueryOption =
    category !== 'highestScoring'
      ? {
          section: category,
          // window: windowOption,
          sort: sortOption,
          page: queryPage,
        }
      : {
          section: category,
          // sort: sortOption,
          window: windowOption,
          page: queryPage,
        };

  const { data, isLoading } = useGalleryQuery(galleryQueryOption);

  useEffect(() => {
    if (!isLoading) {
      if (prevPage !== queryPage) {
        dispatch(getFetch([...posts, ...data]));
        dispatch(setPrevPage(prevPage + 1));
      } else {
        dispatch(getFetch([...data]));
      }
    }
  }, [data]);

  return (
    <>
      {isLoading ? <Loading /> : null}
      <MasonryGallery id={id} posts={posts} />
    </>
  );
}
