import React, { ReactElement, useState } from 'react';

// types
import { PostCommentsProps } from './PostComments.type';

// apis
import { usePostCommentsQuery } from '@/redux/api';

// components
import PostComment from './PostComment/PostComment';

// styles
import { Title, Container, LoadMoreButton, StyledButton } from './PostComments.styled';

// assets
import { ReactComponent as ExpandIcon } from './assets/expandIcon.svg';
import { ReactComponent as ArrowIcon } from '@/assets/Icon/arrow.svg';
import { DropDownList } from '..';

export default function PostComments({ postId, sort, commentCount }: PostCommentsProps): ReactElement {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = usePostCommentsQuery({ postId, sort, page });
  const isNext = data?.next;

  return (
    <Container>
      <div
        css={`
          display: flex;
          align-items: center;
        `}
      >
        <Title>{commentCount} COMMENTS</Title>
        <StyledButton text="Expand All" img={ExpandIcon} alt="Expand Icon" />
        <DropDownList themeType="light" className="dropdown">
          <span>best</span>
          <span>top</span>
          <span>newest</span>
          <span>oldest</span>
        </DropDownList>
      </div>
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
