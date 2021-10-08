import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GalleryQuery } from '../api/types/queries';
import { ListInfo } from '../storeTypes';

const initialState: ListInfo = {
  posts: [],
  category: 'mostViral',
  sortOption: 'newest',
  windowOption: 'day',
  autoPlay: true,
  layout: 'waterfall',
};
export const postListSlice = createSlice({
  name: 'postList',
  initialState,
  reducers: {
    getFetch(state, action: PayloadAction) {
      // URL을 통해 리스트를 JSON으로 받은 뒤 정규화 처리해서 상태를
      // 업데이트 해주는 비동기 로직
    },
    setCategory(state, action: PayloadAction<GalleryQuery['section']>) {
      // 카테고리 변경
      state.category = action.payload;
    },
    setSortOption(state, action: PayloadAction<GalleryQuery['sort']>) {
      // 정렬 옵션 변경
      state.sortOption = action.payload;
    },
    setWindowOption(state, action: PayloadAction<GalleryQuery['window']>) {
      // 시간 범위 옵션 변경
      state.windowOption = action.payload;
    },
    toggleView(state) {
      // 보기 방식 변경
      state.layout = state.layout === 'waterfall' ? 'uniform' : 'waterfall';
    },
    toggleAutoPlay(state) {
      // 자동재생 변경
      state.autoPlay = !state.autoPlay;
    },
  },
});

export const { getFetch, setCategory, setSortOption, setWindowOption, toggleAutoPlay, toggleView } =
  postListSlice.actions;
export default postListSlice.reducer;
