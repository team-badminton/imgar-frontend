import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux';
import { pxToRem } from '@/util/styleUtils';
import { MasonryGalleryFields, MasonryGalleryOptions } from '@/components/index';
import { defaultTheme } from '@/theme/themes';

export const MASONRY_GALLERY_HEADER_MIN_WIDTH__PX = 450;

export default function MasonryGalleryHeader(): ReactElement {
  const masonryGalleryWidth = useSelector((state: RootState) => state.display.masonryGalleryWidth);

  return (
    <div
      css={`
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        width: ${pxToRem(masonryGalleryWidth)};
        min-width: ${pxToRem(MASONRY_GALLERY_HEADER_MIN_WIDTH__PX)};
        padding: ${defaultTheme.spaceSize.m} 0;
      `}
    >
      <MasonryGalleryFields />
      <MasonryGalleryOptions />
    </div>
  );
}
