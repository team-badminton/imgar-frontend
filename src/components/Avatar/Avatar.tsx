import React, { ReactElement } from 'react';

// components
import { Image } from '../../components';
import { ReactComponent as Present } from '@/assets/Button/present-box.svg';

// styles
import { StyledAvatar, Info, MetaInfo, UserInfo } from './Avatar.styled';

// types
import { AvatarProps } from '@/components/Avatar/Avatar.type';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

export default function Avatar({
  className,
  infoLines,
  userName,
  imageId,
  size,
  extraInfos,
  to,
}: AvatarProps): ReactElement {
  return (
    <StyledAvatar className={className} infoLines={infoLines} size={size}>
      <Link to={to}>
        <Image
          id={imageId}
          alt={`profile image of ${userName}`}
          isCircle
          src={`https://imgur.com/user/${userName}/avatar`}
          $width={size === 'small' ? 24 : size === 'medium' ? 32 : 155}
        />
      </Link>
      <Info>
        <UserInfo to={to}>{userName}</UserInfo>
        <MetaInfo size={size}>{extraInfos && extraInfos.map(str => <span key={str}>{str}</span>)}</MetaInfo>
        <Button
          className="give-emerald"
          size={size === 'small' ? 'medium' : 'small'}
          img={Present}
          alt="present box"
          text="Give Emerald"
          backgroundColor="secondaryColor"
        />
      </Info>
    </StyledAvatar>
  );
}

Avatar.defaultProps = {
  infoLines: 2,
  size: 'medium',
};
