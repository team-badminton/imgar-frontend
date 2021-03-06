/* eslint-disable @typescript-eslint/no-explicit-any */
import { GalleryQuery } from './api/types/queries';

export interface ListInfo {
  posts: PostV1Info[];
  category: GalleryQuery['section'];
  sortOption: GalleryQuery['sort'];
  windowOption: GalleryQuery['window'];
  queryPage: number;
  prevPage: number;
  autoPlay: boolean;
  layout: 'waterfall' | 'uniform';
}

export type LatestQueryName = 'gallery' | 'search' | 'userPosts' | 'userFavorites' | 'tagPosts';

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

export interface PostV1Info {
  id: string;
  title: string;
  dateTime: number;
  thumbnailImageId: string /* cover */;
  thumbnailWidth: number /* cover_width */;
  thumbnailHeight: number /* cover_height */;
  accountId: number;
  views: number;
  upCount: number /* ups */;
  downCount: number /* downs */;
  points: number;
  commentCount: number;
  favoriteCount: number;
  imageCount: number;
  type: 'image/jpeg' | 'image/png' | 'video/mp4' | 'image/gif';
  hasSound: boolean;
  isAlbum: boolean;
}

export interface TagInfo {
  name: string;
  displayName: string;
  postCount: number /* total_items */;
  backgroundImageId: string /* background_hash */;
  description: string;
  accent: string;
}

export interface FeaturedTagInfo extends TagInfo {
  isFeatured: boolean;
}

export interface TagPostInfo {
  accent: string;
  backgroundId: string;
  displayName: string;
  description: string;
  postCount: number;
  posts: PostV1Info[];
}

export interface WelcomMessageInfo {
  message: string;
}

export interface ImageInfo {
  id: string;
  description: string | null;
  type: 'image/jpeg' | 'image/png' | 'video/mp4' | 'image/gif';
  hasSound: boolean;
  imageWidth: number;
  imageHeight: number;
  bandWidth: number;
}

export interface DisplayInfo {
  innerWidth: number;
  innerHeight: number;
  masonryGalleryWidth: number;
}

export interface SuggestInfo {
  users: Pick<UserInfo, 'name' | 'id'>[];
  tags: Pick<TagInfo, 'name' | 'backgroundImageId' | 'displayName'>[];
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
  createdDate: string /* created */;
  trophies: TrophyInfo[];
  medals: MedalInfo[];
}

export interface TrophyInfo {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  awardedAt: string;
  link?: string;
}

export interface MedalInfo {
  name: string;
  description: string;
  imageUrl: string;
  pointThreshold: number;
}

export interface PostCommentInfo {
  id: string;
  postId: string;
  cover?: string;
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
