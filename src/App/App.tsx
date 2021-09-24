import Header from '@/components/Header/Header';
import useThrottle from '@/hooks/useThrottle';
import { useTypedDispatch, useTypedSelector } from '@/redux';
import { displayResize, displayScroll, sizeSelector } from '@/redux/slices/displayReducer';
import React, { ReactElement, useEffect } from 'react';

export default function App(): ReactElement {
  const dispatch = useTypedDispatch();
  const scrollAction = displayScroll();
  const resizeAction = displayResize();
  const throttledResize = useThrottle(() => dispatch(resizeAction), 500);
  useEffect(() => {
    dispatch(scrollAction);
    dispatch(resizeAction);
    window.addEventListener('scroll', () => {
      dispatch(scrollAction);
    });
    window.addEventListener('resize', () => {
      throttledResize();
    });
  }, []);

  return <div></div>;
}
