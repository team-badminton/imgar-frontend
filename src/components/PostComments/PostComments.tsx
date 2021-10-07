import React, { ReactElement } from 'react';

// types
import { PostCommentsProps } from './PostComments.type';

// apis
import { usePostCommentsQuery } from '@/redux/api';

// components
import PostComment from './PostComment/PostComment';

export default function PostComments({ postId, sort }: PostCommentsProps): ReactElement {
  const { data, error, isLoading } = usePostCommentsQuery({ postId, sort });
  console.log(data, error, isLoading);
  return (
    <div>
      {data?.map(({ id, author, childrenComments, comment, dateTime, downCount, upCount, parentCommentId }) => (
        <PostComment
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
    </div>
  );
}
