import MainContainer from '@/components/MainContainer/MainContainer';
import React, { ReactElement } from 'react';
import { Loading, MasonryGallery, MasonryGalleryHeader } from '@/components/index';
import { useTypedSelector } from '@/redux';
import { masonryGalleryWidthSelector } from '@/redux/slices/displayReducer';
import { useGalleryQuery } from '@/redux/api';

export default function Home(): ReactElement {
  // API 호출
  const category = useTypedSelector(state => state.listInfo.category);
  const sortOption = useTypedSelector(state => state.listInfo.sortOption);
  const galleryWidth = useTypedSelector(masonryGalleryWidthSelector);
  const { data: posts, isLoading } = useGalleryQuery({ section: category, sort: sortOption });

  return (
    <MainContainer
      sticky
      headerBackground={'https://s.imgur.com/desktop-assets/desktop-assets/homebg.e52b5cdf24f83bcd55f9f1318855f2ef.png'}
      headerCover={<div style={{ height: '350px' }}>커버에 들어갈 내용 테스트</div>}
      customHeader={<div>커스템 헤더에 들어갈 내용 테스트</div>}
      containerWidth={galleryWidth}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MasonryGalleryHeader />
          <MasonryGallery posts={posts} />
        </>
      )}
    </MainContainer>
  );
}
