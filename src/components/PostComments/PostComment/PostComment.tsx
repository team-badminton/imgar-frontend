import React, { ReactElement, useState, useMemo } from 'react';

// components
import { Avatar, MoreButton, Vote } from '@/components';

// types
import { PostCommentInfo } from '@/redux/storeTypes';

// styles
import {
  Container,
  CommentContainer,
  StyledButton,
  ChildrenCommentsContainer,
  VoteContainer,
  Comment,
} from './PostComment.styled';
import { DefaultTheme } from 'styled-components';

// utils

import { convertLink } from '@/util/jsxUtils';

export default function PostComment({
  id,
  author,
  childrenComments,
  comment,
  dateTime,
  downCount,
  parentCommentId,
  upCount,
}: Omit<PostCommentInfo, 'thumbnailImageId' | 'postId'>): ReactElement {
  const [isExpendedChildComments, setIsExpendedChildComments] = useState<boolean>(false);
  const isParent = parentCommentId === '0' ? true : false;

  return (
    <Container isParent={isParent} aria-expanded={childrenComments?.length !== 0 ? 'true' : null}>
      <CommentContainer>
        <Avatar
          css={`
            margin-bottom: ${({ theme }: { theme: DefaultTheme }) => theme.spaceSize.xs};
          `}
          username={author}
          size="small"
          infoRows={1}
          metaInfos={{ time: dateTime, platform: 'Iphone' }}
        />
        <Comment isParent={isParent}>{convertLink(comment, true)}</Comment>
        <VoteContainer isParent={isParent}>
          <Vote color="lightGray" size="small" direction="row" count={upCount - downCount} />
          {childrenComments?.length !== 0 && (
            <StyledButton
              onClick={() => setIsExpendedChildComments(!isExpendedChildComments)}
              text={`
                ${isExpendedChildComments ? '-' : '+'}
                ${childrenComments.length} 
                ${isExpendedChildComments ? 'Collapse' : ''} 
                ${childrenComments.length === 1 ? 'reply' : 'replies'}`}
            />
          )}
        </VoteContainer>
        <MoreButton className="more-btn" />
      </CommentContainer>

      {isExpendedChildComments && (
        <ChildrenCommentsContainer>
          {childrenComments.map(
            ({ id, author, childrenComments, comment, dateTime, downCount, upCount, parentCommentId }) => (
              <PostComment
                key={id}
                id={id}
                author={author}
                childrenComments={childrenComments}
                comment={comment}
                dateTime={dateTime}
                downCount={downCount}
                upCount={upCount}
                parentCommentId={parentCommentId}
              />
            ),
          )}
        </ChildrenCommentsContainer>
      )}
    </Container>
  );
}
