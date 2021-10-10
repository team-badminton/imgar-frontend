import React, { ReactElement, useEffect } from 'react';
import { useTypedSelector } from '@/redux';
import { pxToRem } from '@/util/styleUtils';
import { MasonryGalleryFields, MasonryGalleryOptions } from '@/components/index';
import { defaultTheme } from '@/theme/themes';

export const MASONRY_GALLERY_HEADER_MIN_WIDTH__PX = 450;

export default function MasonryGalleryHeader(): ReactElement {
  const masonryGalleryWidth = useTypedSelector(state => state.display.masonryGalleryWidth);

  return (
    <div
      css={`
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: ${pxToRem(masonryGalleryWidth)};
        min-width: ${pxToRem(MASONRY_GALLERY_HEADER_MIN_WIDTH__PX)};
        padding: ${defaultTheme.spaceSize.m} 0;
        z-index: 1;
      `}
    >
      <MasonryGalleryFields />
      <MasonryGalleryOptions />
    </div>
  );
}
