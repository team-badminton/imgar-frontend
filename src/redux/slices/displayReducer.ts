import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Selector } from 'react-redux';
import { RootState } from '..';
import { DisplayInfo } from '../storeTypes';

const initialState: DisplayInfo = {
  innerHeight: null,
  innerWidth: null,
  masonryGalleryWidth: null,
  scrollOffset: 0,
};

export const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    displayResize(state, action: PayloadAction<{ height: number; width: number }>) {
      state.innerHeight = action.payload.height;
      state.innerWidth = action.payload.width;
    },
    displayScroll(state, action: PayloadAction<number>) {
      state.scrollOffset = action.payload;
    },
    displayMasonryGalleryWidth(state, action: PayloadAction<number>) {
      state.masonryGalleryWidth = action.payload;
    },
  },
});

export const { displayResize, displayScroll, displayMasonryGalleryWidth } = displaySlice.actions;
export default displaySlice.reducer;

export const scrollSelector: Selector<RootState, number> = state => state.display.scrollOffset;
export const sizeSelector: Selector<RootState, Omit<DisplayInfo, 'scrollOffset' | 'masonryGalleryWidth'>> = state => ({
  innerHeight: state.display.innerWidth,
  innerWidth: state.display.innerHeight,
});
