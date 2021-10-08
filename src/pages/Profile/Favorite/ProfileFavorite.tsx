import React, { ReactElement } from 'react';
import { Route, Switch, useLocation, useParams, useRouteMatch } from 'react-router-dom';

const Folder = (): ReactElement => {
  const { folderId, folderName } = useParams<{ folderId: string; folderName: string }>();
  return <div>{folderName ?? 'All favorites'}</div>;
};

export default function ProfileFavorite(): ReactElement {
  const { url } = useRouteMatch();
  const { pathname } = useLocation();
  console.log(url);
  return (
    <Switch>
      <Route path={`${url}/folder/:folderId/:folderName`}>
        <Folder />
      </Route>
    </Switch>
  );
}
