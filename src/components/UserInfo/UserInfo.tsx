import { formattedNumber } from '@/util/formatUtils';
import React, { ReactElement, useState } from 'react';
import {
  UserInfoAvatar,
  UserInfoContainer,
  UserInfoDescription,
  UserInfoExtra,
  UserInfoUsername,
} from './UserInfo.styled';
import { UserInfoProps } from './UserInfo.type';

export default React.memo(function UserInfo({ username, points, notoriety }: UserInfoProps): ReactElement {
  return (
    <UserInfoContainer>
      <UserInfoAvatar src={`https://imgur.com/user/${username}/avatar`} />
      <UserInfoDescription>
        <UserInfoUsername>{username}</UserInfoUsername>
        <UserInfoExtra>
          <span>{points && formattedNumber(points)} PTS</span>
          <span>{notoriety?.toUpperCase()}</span>
        </UserInfoExtra>
      </UserInfoDescription>
    </UserInfoContainer>
  );
});
