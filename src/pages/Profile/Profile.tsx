import Loading from '@/components/Loading/Loading';
import MainContainer from '@/components/MainContainer/MainContainer';
import TabNavigation from '@/components/TabNavigation/TabNavigation';
import { useAccountQuery } from '@/redux/api';
import React, { ReactElement } from 'react';
import { Route, RouteComponentProps, Switch, useParams } from 'react-router-dom';
import ProfileAbout from './ProfileAbout';
import ProfileCover from './ProfileCover';

const Favorites = () => <div>FAVORITES</div>;
const Comments = () => <div>Comments</div>;
const About = () => <div>About</div>;
const Posts = () => <div>Posts</div>;

const tabs = [
  { label: 'Posts', path: 'posts' },
  { label: 'Favorites', path: 'favorites' },
  { label: 'Comments', path: 'comments' },
  { label: 'About', path: 'about' },
];

export default function Profile({ location, match }: RouteComponentProps): ReactElement {
  const { pathname } = location;
  const { username } = useParams<{ username: string }>();
  const { data, isLoading } = useAccountQuery(username);
  const currentTab = pathname.split('/')[3];
  const customHederHeight = currentTab === 'favorites' ? 160 : currentTab === 'about' ? 70 : 100;

  return (
    <MainContainer
      backgroundColor="backgroundDarkNavy"
      headerBackground={data?.coverUrl}
      headerCoverPosition="top"
      headerCover={
        <ProfileCover username={data?.name} points={data?.points} notoriety={data?.notoriety}>
          <TabNavigation tabs={tabs} />
        </ProfileCover>
      }
      darkenBackground
      customHeaderHeight={customHederHeight}
      noOffset
    >
      {isLoading ? (
        <Loading />
      ) : (
        <Switch>
          <Route path={match.url + `/favorites`} exact component={Favorites} />
          <Route path={match.url + `/comments`} exact component={Comments} />
          <Route path={match.url + `/about`} exact render={() => <ProfileAbout username={username} />} />
          <Route path={match.url} component={Posts} />
        </Switch>
      )}
    </MainContainer>
  );
}
