import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';
import { imgurApi } from './api';
import displayReducer from './slices/displayReducer';
import listInfoReducer from './slices/listInfoReducer';
import { Middleware } from 'redux';

export const infiniteScrollMiddleware: Middleware = storeApi => next => action => {
  try {
    const isInfinite = action.meta?.arg?.originalArgs?.isInfinite;

    if (!isInfinite || action.type !== 'imgurApi/executeQuery/fulfilled') {
      next(action);
      return;
    }

    const apiQueries = storeApi.getState().imgurApi.queries;
    const endPointName = action.meta?.arg.endpointName;
    const { page } = action.meta.arg.originalArgs;

    if (endPointName === 'postComments') {
      const { postId } = action.meta.arg.originalArgs;
      const queryCacheKey = `postComments({"page":${page - 1},"postId":"${postId}"})`;
      const lastData = apiQueries[queryCacheKey]?.data;

      if (page === 1 && action.payload.length > 30) {
        action.payload = action.payload.slice(0, 30);
        action.payload.next = true;
      } else if (page !== 1) {
        const accData = [...lastData, ...action.payload];
        action.payload = accData;
      }
    }

    if (endPointName === 'gallery') {
      const queryCacheKey = action.meta.arg.queryCacheKey.replace(`"page":${page}`, `"page":${page - 1}`);
      const lastData = apiQueries[queryCacheKey]?.data;
      if (lastData.length !== 0) {
        action.payload = [...lastData, ...action.payload];
        action.payload.isLoading = false;
      } else {
        action.payload.isLoading = true;
      }
      console.log(lastData);
      console.log('last', action.payload, 'key', queryCacheKey, action.payload.isLoading);
    }
    next(action);
  } catch (e) {
    next(action);
  }
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
