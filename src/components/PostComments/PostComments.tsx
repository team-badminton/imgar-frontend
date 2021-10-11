import React, { ReactElement } from 'react';

// types
import { PostCommentsProps } from './PostComments.type';

// apis
import { usePostCommentsQuery } from '@/redux/api';

// components
import PostComment from './PostComment/PostComment';

// styles
import { Title, StyledButton, Container } from './PostComments.styled';

// assets
import { ReactComponent as ExpandIcon } from './assets/ExpandIcon.svg';
import { SelectBox, SelectBoxList } from '@/components/index';

export default function PostComments({ postId, sort }: PostCommentsProps): ReactElement {
  const { data, error, isLoading } = usePostCommentsQuery({ postId, sort });

  return (
    <Container>
      <div
        css={`
          display: flex;
          align-items: center;
        `}
      >
        <Title>{data?.length} COMMENTS</Title>

        <SelectBox>
          <StyledButton size="custom" text="Expand All" img={ExpandIcon} alt="Expand Icon" />
          <SelectBoxList themeType="light">
            <span>best</span>
            <span>top</span>
            <span>newest</span>
            <span>oldest</span>
          </SelectBoxList>
        </SelectBox>
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
    </Container>
  );
}
