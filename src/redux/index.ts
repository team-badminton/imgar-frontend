import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';
import { imgurV3Api } from './api/v3';
import displayReducer from './slices/displayReducer';
import listInfoReducer from './slices/listInfoReducer';

export const store = configureStore({
  reducer: { listInfo: listInfoReducer, display: displayReducer, [imgurV3Api.reducerPath]: imgurV3Api.reducer },
  devTools: {
    trace: true,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(imgurV3Api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export function useTypedStore() {
  return useStore<ReturnType<typeof store.getState>>();
}

export function useTypedDispatch() {
  return useDispatch<typeof store.dispatch>();
}
