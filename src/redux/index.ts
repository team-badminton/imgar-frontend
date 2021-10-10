import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';
import { imgurApi } from './api';
import displayReducer from './slices/displayReducer';
import listInfoReducer from './slices/listInfoReducer';
import { Middleware } from 'redux';

export const infiniteScrollMiddleware: Middleware = storeApi => next => action => {
  const apiQueries = storeApi.getState().imgurApi.queries;

  if (action.meta?.arg.endpointName === 'postComments' && action.type === 'imgurApi/executeQuery/fulfilled') {
    const { page, postId } = action.meta.arg.originalArgs; // sort
    const queryCacheKey = `postComments({"page":${page - 1},"postId":"${postId}"})`;
    const lastState = apiQueries[queryCacheKey]?.data;

    if (page === 1 && action.payload.length > 30) {
      action.payload = action.payload.slice(0, 30);
      action.payload.next = true;
    } else if (page !== 1) {
      const accState = [...lastState, ...action.payload];
      action.payload = accState;
    }
  }

  next(action);
};

export const store = configureStore({
  reducer: {
    listInfo: listInfoReducer,
    display: displayReducer,
    [imgurApi.reducerPath]: imgurApi.reducer,
  },
  devTools: {
    trace: true,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(imgurApi.middleware).concat(infiniteScrollMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export function useTypedStore() {
  return useStore<ReturnType<typeof store.getState>>();
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useTypedDispatch() {
  return useDispatch<typeof store.dispatch>();
}
