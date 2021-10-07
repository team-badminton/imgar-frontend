import React, { ReactElement } from 'react';

// components
import { Picture } from '@/components';
import { ReactComponent as Present } from '@/assets/Icon/present-box.svg';
import { Link } from 'react-router-dom';

// styles
import { GiveEmeraldButton, Info, MetaInfo, Platform, StyledAvatar, UserInfo } from './Avatar.styled';

// types
import { AvatarProps } from '@/components/Avatar/Avatar.type';

// utils
import { pxToRem } from '@/util/styleUtils';
import { formattedNumber } from '@/util/formatUtils';

// libs
import Moment from 'react-moment';

export default function Avatar({
  className,
  username,
  size,
  transScaleImage,
  infoRows,
  metaInfos,
}: AvatarProps): ReactElement {
  const PROFILE_LINK = `user/${username}`;

  const TIME_UNIT = {
    Month: 3600000 * 24 * 30,
  };
  const CREATED_TIME = metaInfos.time * 1000;
  const TIME_DIFF = +new Date() - CREATED_TIME;

  return (
    <StyledAvatar className={className} size={size} transScaleImage={transScaleImage}>
      <Link to={PROFILE_LINK}>
        <Picture
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
            {metaInfos?.views && `${formattedNumber(metaInfos.views)} views`}
          </span>
          {TIME_DIFF > TIME_UNIT.Month ? (
            <Moment interval={0} date={CREATED_TIME} format={'MMM D YYYY'} />
          ) : (
            <Moment
              date={CREATED_TIME}
              filter={date => {
                const [time, unit] = date.split(' ');
                switch (unit) {
                  case 'day':
                    return '1d';
                  case 'days':
                    return time + 'd';
                  case 'hour':
                    return '1h';
                  case 'hours':
                    return time + 'h';
                  case 'minute':
                    return '1m';
                  case 'minutes':
                    return time + 'm';
                  default:
                    return '1m';
                }
              }}
              fromNow
            />
          )}

          <span>via {metaInfos?.platform && <Platform>{metaInfos.platform}</Platform>}</span>
        </MetaInfo>
        <GiveEmeraldButton
          className="give-emerald"
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
