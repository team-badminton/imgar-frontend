import { Route, useRouteMatch, Switch, useParams, useLocation, BrowserRouter as Router } from 'react-router-dom';
import Loading from '@/components/Loading/Loading';
import MainContainer from '@/components/MainContainer/MainContainer';
import TabNavigation from '@/components/TabNavigation/TabNavigation';
import { useTypedSelector } from '@/redux';
import { useAccountQuery } from '@/redux/api';
import { masonryGalleryWidthSelector } from '@/redux/slices/displayReducer';
import React, { ReactElement } from 'react';
import ProfileAbout from './About/ProfileAbout';
import ProfileCover from './ProfileCover';
import ProfileFavoriteFolders from './Favorite/ProfileFavoriteFolders';
import ProfileFavorite from './Favorite/ProfileFavorite';

const Comments = () => <div>Comments</div>;
const Posts = () => <div>Posts</div>;

const tabs = [
  { label: 'Posts', path: 'posts' },
  { label: 'Favorites', path: 'favorites' },
  { label: 'Comments', path: 'comments' },
  { label: 'About', path: 'about' },
];

export default function Profile(): ReactElement {
  const { pathname } = useLocation();
  const { url } = useRouteMatch();
  const { username } = useParams<{ username: string }>();
  const { data, isLoading } = useAccountQuery(username);
  const currentTab = pathname.split('/')[3];
  const customHederHeight = currentTab === 'favorites' ? 160 : currentTab === 'about' ? 70 : 100;
  const GalleryWidth = useTypedSelector(masonryGalleryWidthSelector);

  return (
    <MainContainer
      backgroundColor="backgroundDarkNavy"
      headerBackground={data?.coverUrl}
      headerCoverPosition="top"
      headerCover={
        <ProfileCover username={data?.name} points={data?.points} notoriety={data?.notoriety}>
          <TabNavigation tabs={tabs} />
          {currentTab === 'favorites' ? <ProfileFavoriteFolders username={username} /> : null}
        </ProfileCover>
      }
      darkenBackground
      customHeaderHeight={customHederHeight}
      containerWidth={GalleryWidth < 450 ? 450 : GalleryWidth > 1264 ? 1264 : GalleryWidth}
      noOffset
    >
      {isLoading ? (
        <Loading />
      ) : (
        <Switch>
          <Route path={url + `/favorites`} component={ProfileFavorite} />
          <Route path={url + `/comments`} exact component={Comments} />
          <Route path={url + `/about`} exact render={() => <ProfileAbout username={username} />} />
          <Route path={url} component={Posts} />
        </Switch>
      )}
    </MainContainer>
  );
}
