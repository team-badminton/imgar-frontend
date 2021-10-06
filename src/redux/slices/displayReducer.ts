import { IMAGECARD_WIDTH_PX } from '@/components/ImageCard/ImageCard.styled';
import { COLUMN_GAP__PX } from '@/components/MasonryGallery/MasonryGallery.styled';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Selector } from 'react-redux';
import { RootState } from '..';
import { DisplayInfo } from '../storeTypes';

const initialState: DisplayInfo = {
  innerHeight: null,
  innerWidth: null,
  masonryGalleryWidth: null,
  totalColumnNum: null,
};

export const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    displayResize(state, action: PayloadAction<{ height: number; width: number }>) {
      state.innerHeight = action.payload.height;
      state.innerWidth = action.payload.width;
      const MAX_COLUMN_NUM = 9;
      // 현재 화면 너비에 열이 더 들어갈 수 있어도 남겨둘 양쪽 최소 여백 설정
      const MIN_MARGIN__PX = 50;

      // 현재 화면 너비에 들어갈 수 있는 전체 열 수 계산
      const COMPUTED_COLUMN_NUM = Math.floor(
        (innerWidth - MIN_MARGIN__PX + COLUMN_GAP__PX) / (IMAGECARD_WIDTH_PX + COLUMN_GAP__PX),
      );
      // 전체 열 수가 최대 개수를 넘지 않도록 조절
      const LAYOUT_TOTAL_COLUMN_NUM = COMPUTED_COLUMN_NUM > MAX_COLUMN_NUM ? MAX_COLUMN_NUM : COMPUTED_COLUMN_NUM;

      // 전체 열 수에 따른 MasonryGallery의 너비 계산
      const MASONRY_GALLERY_WIDTH__PX =
        LAYOUT_TOTAL_COLUMN_NUM * (IMAGECARD_WIDTH_PX + COLUMN_GAP__PX) - COLUMN_GAP__PX;

      state.totalColumnNum = LAYOUT_TOTAL_COLUMN_NUM;
      state.masonryGalleryWidth = MASONRY_GALLERY_WIDTH__PX;
    },
  },
});

export const { displayResize } = displaySlice.actions;
export default displaySlice.reducer;

export const sizeSelector: Selector<RootState, Pick<DisplayInfo, 'innerWidth' | 'innerHeight'>> = state => ({
  innerHeight: state.display.innerHeight,
  innerWidth: state.display.innerHeight,
});

export const masonryGalleryWidthSelector: Selector<RootState, number> = state => state.display.masonryGalleryWidth;
export const totalColumnNumSelector: Selector<RootState, number> = state => state.display.totalColumnNum;
