import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DisplayInfo } from '../storeTypes';

const initialState: DisplayInfo = {
  innerHeight: null,
  innerWidth: null,
  scrollOffset: 0,
};

export const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    displayResize(state) {
      state.innerHeight = window.innerHeight;
      state.innerWidth = window.innerWidth;
    },
    displayScroll(state) {
      state.scrollOffset = window.scrollY;
    },
  },
});

export const { displayResize, displayScroll } = displaySlice.actions;
export default displaySlice.reducer;
