/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Suggest {
  users: { type: 'user'; id: string; text: string }[];
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

export interface TagPosts {
  accent: string;
  background_id: string;
  description: string;
  display: string;
  is_promoted: boolean;
  is_whitelisted: boolean;
  logo_id?: any;
  logo_url?: any;
  post_count: number;
  posts: PostV1[];
}

export interface Image {
  id: string;
  title?: any;
  description: string;
  datetime: number;
  type: 'image/jpeg' | 'image/png' | 'video/mp4';
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
  has_sound?: boolean;
  ad_type: number;
  ad_url: string;
  in_most_viral: boolean;
  include_album_ads: boolean;
  images: Image[];
  type?: Image['type'];
  ad_config?: AdConfig;
  processing: Processing;
  width?: number;
  height?: number;
}

export interface PostV1 {
  id: string;
  account_id: number;
  title: string;
  description: string;
  view_count: number;
  upvote_count: number;
  downvote_count: number;
  point_count: number;
  image_count: number;
  comment_count: number;
  favorite_count: number;
  virality: number;
  score: number;
  in_most_viral: boolean;
  is_album: boolean;
  is_mature: boolean;
  cover_id: string;
  created_at: string;
  updated_at: any;
  url: string;
  privacy: string;
  vote: any;
  favorite: boolean;
  is_ad: boolean;
  ad_type: number;
  ad_url: string;
  include_album_ads: boolean;
  shared_with_community: boolean;
  is_pending: boolean;
  platform: string;
  ad_config: AdConfigV1;
  cover: Cover;
  display: Display[];
  isAlbum: boolean;
}

export interface AdConfigV1 {
  show_ads: boolean;
  safe_flags: string[];
  high_risk_flags: any[];
  unsafe_flags: any[];
  wall_unsafe_flags: any[];
}

export interface Cover {
  id: string;
  account_id: number;
  mime_type: string;
  type: string;
  name: string;
  basename: string;
  url: string;
  ext: string;
  width: number;
  height: number;
  size: number;
  metadata: Metadata;
  created_at: string;
  updated_at: any;
}

export interface Metadata {
  title: string;
  description: string;
  is_animated: boolean;
  is_looping: boolean;
  duration: number;
  has_sound: boolean;
}

export interface Display {
  type: string;
  url?: string;
  colors?: string[];
}

// Users
export interface User {
  id: number;
  username: string;
  bio: string;
  reputation_count: number;
  reputation_name: string;
  avatar_id: string;
  avatar_url: string;
  cover_id: string;
  cover_url: string;
  created_at: string;
  trophies: Trophy[];
  medallions: Medallion[];
  roles: any;
}

export interface Trophy {
  id: number;
  name: string;
  description: string;
  image_height: number;
  image_width: number;
  image_url: string;
  awarded_at?: string;
  data_type?: string;
  data_link?: string;
}

export interface Medallion {
  name: string;
  description: string;
  image_url: string;
  point_threshold: number;
}

// Comments

export interface PostComment {
  account: {
    id: number;
    username: string;
    avatar: string;
  };
  account_id: number;
  comment: string;
  comments: PostComment[];
  create_at: string;
  deleted_at?: string;
  downvote_count: number;
  id: number;
  next?: number;
  parent_id: number;
  platform: string;
  platform_id: number;
  post_id: string;
  updated_at: string;
  upvote_count: number;
  vote?: number;
}

export interface AccountComment {
  id: number;
  image_id: string;
  comment: string;
  author: string;
  author_id: number;
  on_album: boolean;
  album_cover: null | string;
  ups: number;
  downs: number;
  points: number;
  datetime: number;
  parent_id: number;
  deleted: boolean;
  vote: null;
  platform: string;
  has_admin_badge: boolean;
  children: any[];
}

// Fav Folder

export interface Folder {
  id: string;
  account_id: string;
  name: string;
  link: string;
  created_at: string;
  updated_at: string;
  account_url: string;
  cover_hash: null;
  cover_width: null;
  cover_height: null;
  is_private: boolean;
}
