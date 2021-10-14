import { PostCommentQuery } from '@/redux/api/types/queries';

export interface PostCommentsProps {
  className?: string;
  commentCount: number;
  postId: PostCommentQuery['postId'];
  sort?: PostCommentQuery['sort'];
}
