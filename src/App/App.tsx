import Loading from '@/components/Loading/Loading';
import useThrottle from '@/hooks/useThrottle';
import { useTypedDispatch } from '@/redux';
import { displayResize, displayScroll } from '@/redux/slices/displayReducer';
import React, { lazy, ReactElement, Suspense, useEffect } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

export default function App(): ReactElement {
  const dispatch = useTypedDispatch();
  const { pathname } = useLocation();
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

  const Home = lazy(() => import('@/pages/Home/Home'));
  const Gallery = lazy(() => import('@/pages/Gallery/Gallery'));
  const Profile = lazy(() => import('@/pages/Profile/Profile'));
  const SearchResult = lazy(() => import('@/pages/SearchResult/SearchResult'));
  const TagDetail = lazy(() => import('@/pages/TagDetail/TagDetail'));

  return (
    <Suspense fallback={<Loading modal />}>
      <Switch>
        <Redirect exact from="/:url*(/+)/" to={pathname.slice(0, -1)} />
        <Route path="/" exact component={Home} />
        <Route path="/gallery/:id" exact component={Gallery} />
        <Route path="/user/:username" component={Profile} />
        <Route path="/t/:tagname" exact component={TagDetail} />
        <Route path="/search" component={SearchResult} />
        <Route path="/" component={Home} />
      </Switch>
      {/* <Footer /> */}
    </Suspense>
  );
}
