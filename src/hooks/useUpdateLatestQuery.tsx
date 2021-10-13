import { useTypedDispatch } from '@/redux';
import { setLatestQuery } from '@/redux/slices/listInfoReducer';
import { LatestQueryName } from '@/redux/storeTypes';
import { useEffect } from 'react';

export default function useUpdateLatestQuery(name: LatestQueryName, option: unknown) {
  const dispatch = useTypedDispatch();
  useEffect(() => {
    dispatch(setLatestQuery({ name, option }));
  }, [option]);
}
