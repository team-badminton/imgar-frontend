import { useTypedDispatch } from '@/redux';
import { displayResize } from '@/redux/slices/displayReducer';
import { useEffect } from 'react';
import useThrottle from './useThrottle';

export default function useResize() {
  const dispatch = useTypedDispatch();
  const throttledResize = useThrottle((w: number, h: number) => dispatch(displayResize({ width: w, height: h })), 500);
  useEffect(() => {
    dispatch(displayResize({ width: window.innerWidth, height: window.innerHeight }));
    window.addEventListener('resize', () => {
      throttledResize(window.innerWidth, window.innerHeight);
    });
  }, []);
}
