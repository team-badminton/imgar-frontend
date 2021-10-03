import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';
import { imgurApi } from './api';
import displayReducer from './slices/displayReducer';
import listInfoReducer from './slices/listInfoReducer';

export const store = configureStore({
  reducer: {
    listInfo: listInfoReducer,
    display: displayReducer,
    [imgurApi.reducerPath]: imgurApi.reducer,
  },
  devTools: {
    trace: true,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(imgurApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export function useTypedStore() {
  return useStore<ReturnType<typeof store.getState>>();
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useTypedDispatch() {
  return useDispatch<typeof store.dispatch>();
}
