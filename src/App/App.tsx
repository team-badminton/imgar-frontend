import { Gallery, Home, Profile, SearchResult, TagDetail } from '@/pages';
import React, { ReactElement } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

export default function App(): ReactElement {
  return (
    <>
      {/* <Header /> */}
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
