import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useGalleryQuery } from '../api';
import { GalleryQuery } from '../api/types/queries';
import { ListInfo, PostV1Info } from '../storeTypes';

const initialState: ListInfo = {
  posts: [],
  category: 'mostViral',
  sortOption: 'newest',
  windowOption: 'day',
  queryPage: 1,
  prevPage: 1,
  autoPlay: true,
  layout: 'waterfall',
  latestQueryFn: useGalleryQuery,
  latestQueryOption: {},
};
export const postListSlice = createSlice({
  name: 'postList',
  initialState,
  reducers: {
    getFetch(state, action: PayloadAction<PostV1Info[]>) {
      // URL을 통해 리스트를 JSON으로 받은 뒤 정규화 처리해서 상태를
      // 업데이트 해주는 비동기 로직
      state.posts = action.payload;
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
    setQueryPage(state, action: PayloadAction<GalleryQuery['page']>) {
      // page 수 증가
      state.queryPage = action.payload;
    },
    setPrevPage(state, action: PayloadAction<GalleryQuery['page']>) {
      // page 수 증가
      state.prevPage = action.payload;
    },
    toggleView(state) {
      // 보기 방식 변경
      state.layout = state.layout === 'waterfall' ? 'uniform' : 'waterfall';
    },
    toggleAutoPlay(state) {
      // 자동재생 변경
      state.autoPlay = !state.autoPlay;
    },
    setLatestQueryFn(state, action: PayloadAction<ListInfo['latestQueryFn']>) {
      state.latestQueryFn = action.payload;
    },
    setLatestQueryOption(state, action: PayloadAction<ListInfo['latestQueryOption']>) {
      state.latestQueryOption = action.payload;
    },
  },
});

export const {
  getFetch,
  setCategory,
  setSortOption,
  setWindowOption,
  setQueryPage,
  setPrevPage,
  toggleAutoPlay,
  toggleView,
} = postListSlice.actions;
export default postListSlice.reducer;
