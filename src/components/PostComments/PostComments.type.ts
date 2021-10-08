import { PostCommentQuery } from '@/redux/api/types/queries';

export interface PostCommentsProps {
  postId: PostCommentQuery['postId'];
  sort?: PostCommentQuery['sort'];
}
