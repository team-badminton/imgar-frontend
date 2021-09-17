export interface ListInfo {
  posts: PostInfo[];
  autoPlay: boolean;
  layout: 'waterfall' | 'uniform';
}

export interface PostInfo {
  id: string;
  title: string;
  dateTime: number;
  thumbnailImageId: string /* cover */;
  thumbnailWidth: number /* cover_width */;
  thumbnailHeight: number /* cover_height */;
  accountName: string /* account_url */;
  accountId: number;
  views: number;
  upCount: number /* ups */;
  downCount: number /* downs */;
  points: number;
  commentCount: number;
  favoriteCount: number;
  images: ImageInfo[];
  tags: TagInfo[];
}

export interface TagInfo {
  name: string;
  postCount: number /* total_items */;
  backgroundImageId: string /* background_hash */;
  description: string;
}

export interface ImageInfo {
  id: string;
  description: string | null;
  type: 'image/jpeg' | 'video/mp4';
  hasSound: boolean;
  imageWidth: number;
  imageHeight: number;
  bandWidth: number;
}

export interface DisplayInfo {
  innerWidth: number;
  innerHeight: number;
  scrollOffset: number;
}

export interface SuggestInfo {
  users: Pick<UserInfo, 'name' | 'avatarUrl'>[];
  tags: Pick<TagInfo, 'name' | 'backgroundImageId'>[];
  posts: Pick<PostInfo, 'id' | 'title'>[];
}

export interface UserInfo {
  id: string;
  name: string /* url */;
  bio: string | null;
  avatarUrl: string;
  coverUrl: string;
  points: number /* reputation */;
  notoriety: string /* reputation_name */;
  createdDate: number /* created */;
}

export interface PostCommentInfo {
  id: string;
  postId: string;
  thumbnailImageId: string;
  comment: string;
  author: string;
  upCount: number;
  downCount: number;
  parentCommentId: string;
  dateTime: number;
  childrenComments?: PostCommentInfo[];
}

export interface FolderInfo {
  id: string;
  name: string;
}
