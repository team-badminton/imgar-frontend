export interface GalleryQuery {
  section?: 'hot' | 'top' | 'user';
  sort?: 'viral' | 'top' | 'time' | 'rising';
  window?: 'day' | 'week' | 'month' | 'year' | 'all';
  page?: number;
  showViral?: boolean;
  showMature?: boolean;
  albumPreviews?: boolean;
}
export interface GallerySearchQuery {
  sort?: 'viral' | 'top' | 'time';
  window?: 'day' | 'week' | 'month' | 'year' | 'all';
  page?: number;
  keyword: string;
}
export interface SuggestQuery {
  keyword: string;
}
export interface PostCommentQuery {
  postId: string;
  sort: 'best' | 'top' | 'new';
}
export interface AccountCommentQuery {
  username: string;
  sort: 'best' | 'worst' | 'oldest' | 'newest';
  page: number;
}
export interface AccountPostQuery {
  username: string;
  page?: number;
}
