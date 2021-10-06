import React, { ReactElement, useState } from 'react';

// components
import { Avatar, Vote } from '@/components';

// types
import { PostCommentInfo } from '@/redux/storeTypes';

// styles
import {
  PostCommentContainer,
  StyledButton,
  ChildrenCommentsContainer,
  VoteContainer,
  Comment,
} from './PostComment.styled';

export default function PostComment({
  id,
  author,
  childrenComments,
  comment,
  dateTime,
  downCount,
  upCount,
}: Omit<PostCommentInfo, 'thumbnailImageId' | 'parentCommentId' | 'postId'>): ReactElement {
  const [isExpendedChildComments, setIsExpendedChildComments] = useState<boolean>(false);

  return (
    <PostCommentContainer>
      <Avatar username={author} size="small" infoRows={1} metaInfos={{ time: dateTime, platform: 'Iphone' }} />
      <Comment>{comment}</Comment>
      <VoteContainer>
        <Vote size="small" direction="row" count={upCount - downCount} />
        {childrenComments?.length !== 0 && (
          <StyledButton
            onClick={() => setIsExpendedChildComments(!isExpendedChildComments)}
            size="custom"
            text={`+ ${childrenComments.length} reply`}
          />
        )}
      </VoteContainer>
      {childrenComments && isExpendedChildComments && (
        <ChildrenCommentsContainer>
          {childrenComments.map(({ id, author, childrenComments, comment, dateTime, downCount, upCount }) => (
            <PostComment
              key={id}
              id={id}
              author={author}
              childrenComments={childrenComments}
              comment={comment}
              dateTime={dateTime}
              downCount={downCount}
              upCount={upCount}
            />
          ))}
        </ChildrenCommentsContainer>
      )}
    </PostCommentContainer>
  );
}
