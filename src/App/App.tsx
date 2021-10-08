import Loading from '@/components/Loading/Loading';
import useResize from '@/hooks/useResize';
import React, { lazy, ReactElement, Suspense } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

const Home = lazy(() => import('@/pages/Home/Home'));
const Gallery = lazy(() => import('@/pages/Gallery/Gallery'));
const Profile = lazy(() => import('@/pages/Profile/Profile'));
const SearchResult = lazy(() => import('@/pages/SearchResult/SearchResult'));
const TagDetail = lazy(() => import('@/pages/TagDetail/TagDetail'));

export default function App(): ReactElement {
  const { pathname } = useLocation();

  useResize();

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
