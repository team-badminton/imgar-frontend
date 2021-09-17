import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListInfo } from '../storeTypes';

const initialState: ListInfo = {
  posts: [],
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
    toggleView(state) {
      // 보기 방식 변경
    },
    toggleAutoPlay(state) {
      // 자동재생 변경
    },
  },
});

export const { getFetch, toggleAutoPlay, toggleView } = postListSlice.actions;
export default postListSlice.reducer;
