import { Gallery, Home, Profile, SearchResult, TagDetail } from '@/pages';
import React, { ReactElement, useEffect, useRef } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import useThrottle from '@/hooks/useThrottle';
import { useTypedDispatch, useTypedSelector } from '@/redux';
import { displayResize, displayScroll, sizeSelector } from '@/redux/slices/displayReducer';
import Header from '@/components/Header/Header';

export default function App(): ReactElement {
  const dispatch = useTypedDispatch();
  const throttledResize = useThrottle((w: number, h: number) => dispatch(displayResize({ width: w, height: h })), 500);
  useEffect(() => {
    dispatch(displayScroll(window.scrollY));
    dispatch(displayResize({ width: window.innerWidth, height: window.innerHeight }));
    window.addEventListener('scroll', () => {
      dispatch(displayScroll(window.scrollY));
    });
    window.addEventListener('resize', () => {
      throttledResize(window.innerWidth, window.innerHeight);
    });
  }, []);

  const bodyRef = useRef<HTMLDivElement>();

  return (
    <>
      <Header
        headerBackground={
          'https://s.imgur.com/desktop-assets/desktop-assets/homebg.e52b5cdf24f83bcd55f9f1318855f2ef.png'
        }
        threshold={150}
        bodyRef={bodyRef}
      />
      <div ref={bodyRef}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gallery/:id" exact component={Gallery} />
          <Route path="/user/:username" exact component={Profile} />
          <Route path="/t/:tagname" exact component={TagDetail} />
          <Route path="/search" component={SearchResult} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
      {/* <Footer /> */}
    </>
  );
}
