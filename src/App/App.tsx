import { Gallery, Home, Profile, SearchResult, TagDetail } from '@/pages';
import React, { ReactElement, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import useThrottle from '@/hooks/useThrottle';
import { useTypedDispatch, useTypedSelector } from '@/redux';
import { displayResize, displayScroll, sizeSelector } from '@/redux/slices/displayReducer';
import Header from '@/components/Header/Header';

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

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gallery/:id" exact component={Gallery} />
        <Route path="/user/:username" exact component={Profile} />
        <Route path="/t/:tagname" exact component={TagDetail} />
        <Route path="/search" component={SearchResult} />
        <Route path="/" component={Home} />
      </Switch>
      {/* <Footer /> */}
    </>
  );
}
