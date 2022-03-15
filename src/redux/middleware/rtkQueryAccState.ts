import { Middleware } from 'redux';

export const rtkQueryAccState: Middleware = storeApi => next => action => {
  try {
    const isAccumulated = action.meta?.arg?.originalArgs?.isAccumulated;

    if (!isAccumulated || action.type !== 'imgurApi/executeQuery/fulfilled') {
      next(action);
      return;
    }

    const apiQueries = storeApi.getState().imgurApi.queries;
    const { page } = action.meta.arg.originalArgs;

    const queryCacheKey = action.meta.arg.queryCacheKey.replace(`"page":${page}`, `"page":${page - 1}`);
    const lastData = apiQueries[queryCacheKey]?.data;

    if (lastData) {
      action.payload = [...lastData, ...action.payload];
      action.payload.isLoading = false;
    } else {
      action.payload.isLoading = undefined;
    }

    next(action);
  } catch (e) {
    next(action);
  }
};
