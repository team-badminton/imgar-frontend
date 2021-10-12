import Loading from '@/components/Loading/Loading';
import MainContainer from '@/components/MainContainer/MainContainer';
import { useTypedSelector } from '@/redux';
import { useAccountQuery } from '@/redux/api';
import { masonryGalleryWidthSelector } from '@/redux/slices/displayReducer';
import React, { ReactElement } from 'react';
import { Route, Switch, useLocation, useParams, useRouteMatch } from 'react-router-dom';
import ProfileAbout from './About/ProfileAbout';
import ProfileComments from './Comments/ProfileComments';
import ProfileFavorite from './Favorite/ProfileFavorite';
import ProfilePosts from './Posts/ProfilePosts';
import ProfileCover from './ProfileCover';

const FAVORITE_HEIGHT = 130;
const TAB_NAVIGATION_HEIGHT = 65;
const HEADER_HEIGHT = 49;

export default function Profile(): ReactElement {
  const { pathname } = useLocation();
  const { path } = useRouteMatch();
  const { username } = useParams<{ username: string }>();
  const { data, isLoading } = useAccountQuery(username);
  const currentTab = pathname.split('/')[3];
  const customHederHeight =
    TAB_NAVIGATION_HEIGHT +
    (currentTab === 'favorites' ? FAVORITE_HEIGHT + HEADER_HEIGHT : currentTab === 'about' ? 0 : HEADER_HEIGHT);
  const GalleryWidth = useTypedSelector(masonryGalleryWidthSelector);

  return (
    <MainContainer
      backgroundColor="backgroundDarkNavy"
      headerBackground={data?.coverUrl}
      headerCoverPosition="top"
      headerCover={
        <ProfileCover username={data?.name} points={data?.points} notoriety={data?.notoriety}></ProfileCover>
      }
      darkenBackground
      customHeaderHeight={customHederHeight}
      containerWidth={GalleryWidth}
      noOffset={currentTab !== 'about'}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <Switch>
          <Route
            path={[path + `/favorites`, path + `/favorites/folder/:folderId/:folderName`]}
            component={ProfileFavorite}
            exact
          />
          <Route path={path + `/comments`} exact component={ProfileComments} />
          <Route path={path + `/about`} exact component={ProfileAbout} />
          <Route path={path} component={ProfilePosts} />
        </Switch>
      )}
    </MainContainer>
  );
}
