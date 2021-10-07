import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux';
import { pxToRem } from '@/util/styleUtils';
import { MasonryGalleryFields, MasonryGalleryOptions } from '@/components/index';

export default function MasonryGalleryHeader(): ReactElement {
  const MASONRY_GALLERY_HEADER_MIN_WIDTH__PX = 450;
  const masonryGalleryWidth = useSelector((state: RootState) => state.display.masonryGalleryWidth);

  return (
    <div
      css={`
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        width: ${pxToRem(masonryGalleryWidth)};
        min-width: ${pxToRem(MASONRY_GALLERY_HEADER_MIN_WIDTH__PX)};
      `}
    >
      <MasonryGalleryFields />
      <MasonryGalleryOptions />
    </div>
  );
}
