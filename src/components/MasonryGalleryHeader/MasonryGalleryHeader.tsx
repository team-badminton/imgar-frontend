import React, { ReactElement } from 'react';
import { useTypedSelector } from '@/redux';
import { MasonryGalleryFields, MasonryGalleryOptions } from '@/components/index';
import { ControlHeaderContainer } from '@/pages/SearchResult/SearchResult.styled';

export const MASONRY_GALLERY_HEADER_MIN_WIDTH__PX = 450;

export default function MasonryGalleryHeader(): ReactElement {
  const containerWidth = useTypedSelector(state => state.display.masonryGalleryWidth);
  return (
    <ControlHeaderContainer isMinWidth={containerWidth <= 240}>
      <MasonryGalleryFields />
      <MasonryGalleryOptions />
    </ControlHeaderContainer>
  );
}
