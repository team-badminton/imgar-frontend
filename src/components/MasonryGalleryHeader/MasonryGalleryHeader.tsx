import React, { ReactElement, useEffect } from 'react';
import { useTypedSelector } from '@/redux';
import { pxToRem } from '@/util/styleUtils';
import { MasonryGalleryFields, MasonryGalleryOptions, Search } from '@/components/index';
import { defaultTheme } from '@/theme/themes';
import { StyledMasonryGalleryHeaderSearch } from './MasonryGalleryHeader.styled';
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
