import React, { ReactElement } from 'react';
import { Container, FavoriteButton, LinkToComment, StyledVote } from './PostSideVoteBar.styled';

// assets
import { ReactComponent as HeartIcon } from '@/assets/Icon/heartIcon.svg';
import { ReactComponent as CommentIcon } from '@/assets/Icon/commentIcon.svg';

// types
import { PostSideVoteBarProps } from './PostSideVoteBar.type';

export default function PostSideVoteBar({ className, commentCount, votePoints }: PostSideVoteBarProps): ReactElement {
  return (
    <Container className={className}>
      <StyledVote color="white" size="large" count={votePoints} direction="column">
        <FavoriteButton img={HeartIcon} alt="heart" />
      </StyledVote>
      <LinkToComment
        to="#comments"
        scroll={e =>
          window.scrollTo({
            top: e.offsetTop + 150,
            behavior: 'smooth',
          })
        }
      >
        <CommentIcon title="comment" />
        {commentCount}
      </LinkToComment>
    </Container>
  );
}
