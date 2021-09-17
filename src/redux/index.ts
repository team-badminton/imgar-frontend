import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';
import displayReducer from './slices/displayReducer';
import listInfoReducer from './slices/listInfoReducer';
import { DisplayInfo, ListInfo } from './storeTypes';

export const store = configureStore<{ listInfo: ListInfo; display: DisplayInfo }>({
  reducer: { listInfo: listInfoReducer, display: displayReducer },
  devTools: {
    trace: true,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export function useTypedStore() {
  return useStore<ReturnType<typeof store.getState>>();
}

export function useTypedDispatch() {
  return useDispatch<typeof store.dispatch>();
}
