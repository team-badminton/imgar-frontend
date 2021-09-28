import React, { ReactElement } from 'react';

// components
import { Image } from '@/components';
import { ReactComponent as Present } from '@/assets/Button/present-box.svg';
import { Link } from 'react-router-dom';

// styles
import { GiveEmeraldButton, Info, MetaInfo, Platform, StyledAvatar, UserInfo } from './Avatar.styled';

// types
import { AvatarProps } from '@/components/Avatar/Avatar.type';
import { pxToRem } from '@/util/styleUtils';

export default function Avatar({ username, size, transScaleImage, infoRows, metaInfos }: AvatarProps): ReactElement {
  const PROFILE_LINK = `user/${username}`;

  return (
    <StyledAvatar size={size} transScaleImage={transScaleImage}>
      <Link to={PROFILE_LINK}>
        <Image
          alt={`profile image of ${username}`}
          isCircle
          src={`https://imgur.com/user/${username}/avatar`}
          imageWidth={size === 'medium' ? 32 : 24}
        />
      </Link>
      <Info>
        <UserInfo $infoRows={infoRows} to={PROFILE_LINK}>
          {username}
        </UserInfo>
        <MetaInfo $infoRows={infoRows}>
          <span
            css={`
              margin-left: ${infoRows === 1 && metaInfos?.views && pxToRem(5)};
            `}
          >
            {metaInfos?.views && `${metaInfos.views} views`}
          </span>
          <span>{`${metaInfos?.time}`}</span>
          <span>via {metaInfos?.platform && <Platform>{metaInfos.platform}</Platform>}</span>
        </MetaInfo>
        <GiveEmeraldButton
          alt="present box"
          backgroundColor="secondaryColor"
          color="white"
          img={Present}
          size={size === 'small' ? 'medium' : 'small'}
          text="Give Emerald"
        />
      </Info>
    </StyledAvatar>
  );
}

Avatar.defaultProps = {
  size: 'medium',
};
