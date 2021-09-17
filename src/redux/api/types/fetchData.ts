/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Suggest {
  users: User[];
  tags: Tag[];
  posts: { type: 'post'; hash: string; title: string }[];
}

interface Hashtag {
  indices: number[];
  tag: string;
}

interface DescriptionAnnotations {
  hashtag: Hashtag[];
}

export interface Tag {
  name: string;
  display_name: string;
  followers: number;
  total_items: number;
  following: boolean;
  is_whitelisted: boolean;
  background_hash: string;
  thumbnail_hash?: any;
  accent: string;
  background_is_animated: boolean;
  thumbnail_is_animated: boolean;
  is_promoted: boolean;
  description: string;
  logo_hash?: any;
  logo_destination_url?: any;
  description_annotations: DescriptionAnnotations;
}

export interface Image {
  id: string;
  title?: any;
  description: string;
  datetime: number;
  type: 'image/jpeg' | 'video/mp4';
  animated: boolean;
  width: number;
  height: number;
  size: number;
  views: number;
  bandwidth: any;
  vote?: any;
  favorite: boolean;
  nsfw?: any;
  section?: any;
  account_url?: any;
  account_id?: any;
  is_ad: boolean;
  in_most_viral: boolean;
  has_sound: boolean;
  tags: any[];
  ad_type: number;
  ad_url: string;
  edited: string;
  in_gallery: boolean;
  link: string;
  comment_count?: any;
  favorite_count?: any;
  ups?: any;
  downs?: any;
  points?: any;
  score?: any;
  mp4_size?: number;
  mp4: string;
  gifv: string;
  hls: string;
  processing: Processing;
  looping?: boolean;
}

interface AdConfig {
  safeFlags: string[];
  highRiskFlags: any[];
  unsafeFlags: string[];
  wallUnsafeFlags: any[];
  showsAds: boolean;
}

interface Processing {
  status: string;
}

export interface Post {
  id: string;
  title: string;
  description: string;
  datetime: number;
  cover: string;
  cover_width: number;
  cover_height: number;
  account_url: string;
  account_id: number;
  privacy: string;
  layout: string;
  views: number;
  link: string;
  ups: number;
  downs: number;
  points: number;
  score: number;
  is_album: boolean;
  vote?: any;
  favorite: boolean;
  nsfw: boolean;
  section: string;
  comment_count: number;
  favorite_count: number;
  topic?: any;
  topic_id?: number;
  images_count: number;
  in_gallery: boolean;
  is_ad: boolean;
  tags: Tag[];
  ad_type: number;
  ad_url: string;
  in_most_viral: boolean;
  include_album_ads: boolean;
  images: Image[];
  ad_config?: AdConfig;
  processing: Processing;
}

// Users

interface UserFollow {
  status: boolean;
}

export interface User {
  id: number;
  url: string;
  bio?: string | null;
  avatar: string;
  avatar_name: string;
  cover: string;
  cover_name: string;
  reputation: number;
  reputation_name: string;
  created: number;
  pro_expiration: boolean;
  user_follow: UserFollow;
}

// Comments

export interface PostComment {
  id: number;
  image_id: string;
  comment: string;
  author: string;
  author_id: number;
  on_album: boolean;
  album_cover: string;
  ups: number;
  downs: number;
  points: number;
  datetime: number;
  parent_id: number;
  deleted: boolean;
  vote?: any;
  platform: string;
  has_admin_badge: boolean;
  children?: PostComment[];
}
