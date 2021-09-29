import React, { ReactElement } from 'react';
import {
  UserInfoAvatar,
  UserInfoContainer,
  UserInfoDescription,
  UserInfoExtra,
  UserInfoUsername,
} from './UserInfo.styled';
import { UserInfoProps } from './UserInfo.type';

export default function UserInfo({ username, points, notoriety }: UserInfoProps): ReactElement {
  return (
    <UserInfoContainer>
      <UserInfoAvatar src={`https://imgur.com/user/${username}/avatar`} />
      <UserInfoDescription>
        <UserInfoUsername>{username}</UserInfoUsername>
        <UserInfoExtra>
          <span>{points} PTS</span>
          <span>{notoriety?.toUpperCase()}</span>
        </UserInfoExtra>
      </UserInfoDescription>
    </UserInfoContainer>
  );
}
