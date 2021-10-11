import React, { ReactElement, useState } from 'react';

// types
import { PostCommentsProps } from './PostComments.type';

// apis
import { usePostCommentsQuery } from '@/redux/api';

// components
import { SelectBox, SelectBoxList } from '@/components';
import PostComment from './PostComment/PostComment';
import PostCommentForm from './PostCommentForm/PostCommentForm';

// styles
import { Title, Container, LoadMoreButton, StyledButton, CommentHeader } from './PostComments.styled';

// assets
import { ReactComponent as ExpandIcon } from './assets/expandIcon.svg';
import { ReactComponent as ArrowIcon } from '@/assets/Icon/arrow.svg';

export default function PostComments({ postId, sort, commentCount }: PostCommentsProps): ReactElement {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = usePostCommentsQuery({ postId, sort, page });
  const isNext = data?.next;

  return (
    <Container id="comments">
      <PostCommentForm />
      <CommentHeader>
        <Title>{commentCount} COMMENTS</Title>
        <StyledButton text="Expand All" img={ExpandIcon} alt="Expand Icon" />
      </CommentHeader>
      <ul>
        {data?.map(({ id, author, childrenComments, comment, dateTime, downCount, upCount, parentCommentId }) => (
          <PostComment
            aria-expanded={childrenComments ? 'true' : null}
            key={id}
            id={id}
            author={author}
            childrenComments={childrenComments}
            comment={comment}
            dateTime={dateTime}
            downCount={downCount}
            parentCommentId={parentCommentId}
            upCount={upCount}
          />
        ))}
      </ul>
      {!!isNext && (
        <div
          css={`
            display: flex;
            justify-content: center;
          `}
        >
          <LoadMoreButton
            hoverBackgroundColor="blue"
            text="Load More Components"
            img={ArrowIcon}
            alt="▼"
            onClick={() => {
              setPage(2);
            }}
          />
        </div>
      )}
    </Container>
  );
}
