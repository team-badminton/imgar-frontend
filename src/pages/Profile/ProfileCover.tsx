import UserInfo from '@/components/UserInfo/UserInfo';
import React, { ReactElement } from 'react';
import { ProfileCoverContainer } from './Profile.styled';
import { ProfileCoverInfo } from './Profile.type';

export default React.memo(function ProfileCover({
  username,
  points,
  notoriety,
  children,
}: ProfileCoverInfo): ReactElement {
  return (
    <ProfileCoverContainer>
      <UserInfo username={username} points={points} notoriety={notoriety} />
      <div
        css={`
          justify-self: flex-end;
        `}
      >
        {children}
      </div>
    </ProfileCoverContainer>
  );
});
