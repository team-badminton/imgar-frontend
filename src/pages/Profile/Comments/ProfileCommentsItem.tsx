/* eslint-disable @typescript-eslint/ban-ts-comment */
import { convertLink } from '@/util/styleUtils';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNowStrict } from 'date-fns';
import {
  ProfileCommentItemContainer,
  ProfileCommentItemInfo,
  ProfileCommentItemThumbnail,
  ProfileCommentItemWrapper,
} from './ProfileComments.styled';
import { ReactComponent as UpIconSVG } from '@/assets/Icon/upIcon.svg';
import { formatDistance } from '@/util/formatUtils';

interface Props {
  postId: string;
  comment: string;
  points: number;
  dateTime: number;
  cover: string;
}

export default function ProfileCommentItem({ postId, comment, points, dateTime, cover }: Props): ReactElement {
  return (
    <ProfileCommentItemWrapper>
      <Link
        to={`/gallery/${postId}`}
        css={`
          margin-right: ${
            /* @ts-ignore */
            ({ theme }) => theme.spaceSize.r
          };
          flex-shrink: 0;
        `}
      >
        <ProfileCommentItemThumbnail src={`https://i.imgur.com/${cover}b.png`} imageWidth={77} imageHeight={77} />
      </Link>
      <ProfileCommentItemContainer>
        <p>{convertLink(comment)}</p>
        <ProfileCommentItemInfo>
          <span>
            <UpIconSVG width="12" height="12" />
            {points} pts
          </span>
          <span>
            {formatDistanceToNowStrict(new Date(dateTime * 1000), {
              roundingMethod: 'floor',
              locale: {
                formatDistance: formatDistance,
              },
            })}
          </span>
        </ProfileCommentItemInfo>
      </ProfileCommentItemContainer>
    </ProfileCommentItemWrapper>
  );
}
