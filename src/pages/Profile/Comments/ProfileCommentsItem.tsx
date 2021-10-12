import { convertLink } from '@/util/styleUtils';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import {
  ProfileCommentItemContainer,
  ProfileCommentItemThumbnail,
  ProfileCommentItemWrapper,
} from './ProfileComments.styled';

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
      <Link to={`/gallery/${postId}`}>
        <ProfileCommentItemThumbnail src={`https://i.imgur.com/${cover}b.png`} imageWidth={77} imageHeight={77} />
      </Link>
      <ProfileCommentItemContainer>
        <p>{convertLink(comment)}</p>
      </ProfileCommentItemContainer>
    </ProfileCommentItemWrapper>
  );
}
