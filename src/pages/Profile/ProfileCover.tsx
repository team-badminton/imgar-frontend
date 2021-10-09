import { ContainerWidthContext } from '@/components/MainContainer/MainContainer';
import TabNavigation from '@/components/TabNavigation/TabNavigation';
import UserInfo from '@/components/UserInfo/UserInfo';
import React, { ReactElement, useContext } from 'react';
import { ProfileCoverContainer, ProfileCoverWrapper } from './Profile.styled';
import { ProfileCoverInfo } from './Profile.type';

const tabs = [
  { label: 'Posts', path: 'posts' },
  { label: 'Favorites', path: 'favorites' },
  { label: 'Comments', path: 'comments' },
  { label: 'About', path: 'about' },
];

export default function ProfileCover({ username, points, notoriety, children }: ProfileCoverInfo): ReactElement {
  const containerWidth = useContext(ContainerWidthContext);

  return (
    <ProfileCoverContainer>
      <UserInfo username={username} points={points} notoriety={notoriety} />
      <TabNavigation tabs={tabs} />
      <ProfileCoverWrapper containerWidth={containerWidth}>{children}</ProfileCoverWrapper>
    </ProfileCoverContainer>
  );
}
