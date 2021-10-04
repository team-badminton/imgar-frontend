import MainContainer from '@/components/MainContainer/MainContainer';
import TabNavigation from '@/components/TabNavigation/TabNavigation';
import { useAccountQuery } from '@/redux/api';
import React, { ReactElement, useRef } from 'react';
import { Route, Switch, useLocation, useParams, useRouteMatch, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import ProfileAbout from './ProfileAbout';
import ProfileCover from './ProfileCover';

const ProfileWrapper = React.memo(styled.div`
  padding-top: 75px;
`);

const Favorites = () => <div style={{ height: '150vh' }}>FAVORITES</div>;
const Comments = () => <div style={{ height: '150vh' }}>Comments</div>;
const About = () => <div style={{ height: '150vh' }}>About</div>;
const Posts = () => <div style={{ height: '150vh' }}>Posts</div>;

const tabs = [
  { label: 'Posts', path: 'posts' },
  { label: 'Favorites', path: 'favorites' },
  { label: 'Comments', path: 'comments' },
  { label: 'About', path: 'about' },
];

export default function Profile({ location, match }: RouteComponentProps): ReactElement {
  const { pathname } = location;
  const { username } = useParams<{ username: string }>();
  const { data } = useAccountQuery(username);
  const customHederHeight = pathname.includes('/favorites') ? 100 : 70;

  return (
    <MainContainer
      headerBackground={data?.coverUrl}
      headerCover={
        <ProfileCover username={data?.name} points={data?.points} notoriety={data?.notoriety}>
          <TabNavigation tabs={tabs} />
        </ProfileCover>
      }
      darkenBackground
      customHeaderHeight={customHederHeight}
    >
      <ProfileWrapper>
        <Switch>
          <Route path={match.url + `/favorites`} exact component={Favorites} />
          <Route path={match.url + `/comments`} exact component={Comments} />
          <Route path={match.url + `/about`} exact render={() => <ProfileAbout username={username} />} />
          <Route path={match.url} component={Posts} />
        </Switch>
      </ProfileWrapper>
    </MainContainer>
  );
}
