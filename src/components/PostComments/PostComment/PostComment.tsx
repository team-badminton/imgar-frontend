import React, { ReactElement, useState } from 'react';

// components
import { Avatar, Vote } from '@/components';

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
  console.log(isParent);
  return (
    <Container isParent={isParent}>
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
        <Comment isParent={isParent}>{comment}</Comment>
        <VoteContainer isParent={isParent}>
          <Vote size="small" direction="row" count={upCount - downCount} />
          {childrenComments?.length !== 0 && (
            <StyledButton
              onClick={() => setIsExpendedChildComments(!isExpendedChildComments)}
              size="custom"
              text={`
                ${isExpendedChildComments ? '-' : '+'}
                ${childrenComments.length} 
                ${isExpendedChildComments ? 'Collapse' : ''} 
                ${childrenComments.length === 1 ? 'reply' : 'replies'}`}
            />
          )}
        </VoteContainer>
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
