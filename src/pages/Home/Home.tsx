import MainContainer from '@/components/MainContainer/MainContainer';
import React, { ReactElement } from 'react';
import { MasonryGallery, MasonryGalleryHeader } from '@/components/index';
import { useTypedSelector } from '@/redux';
import { masonryGalleryWidthSelector } from '@/redux/slices/displayReducer';

export default function Home(): ReactElement {
  const galleryWidth = useTypedSelector(masonryGalleryWidthSelector);
  return (
    <MainContainer
      sticky
      headerBackground={'https://s.imgur.com/desktop-assets/desktop-assets/homebg.e52b5cdf24f83bcd55f9f1318855f2ef.png'}
      headerCover={<div style={{ height: '350px' }}>커버에 들어갈 내용 테스트</div>}
      customHeader={<div>커스템 헤더에 들어갈 내용 테스트</div>}
      containerWidth={galleryWidth}
    >
      {/* 실제 본문 내용 */}
      <MasonryGalleryHeader />
      <MasonryGallery />
    </MainContainer>
  );
}
