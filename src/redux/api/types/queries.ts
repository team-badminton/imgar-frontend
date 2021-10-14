export interface GalleryQuery {
  section?: 'mostViral' | 'userSubmitted' | 'highestScoring';
  sort?: 'popular' | 'newest' | 'best' | 'random' | 'rising';
  window?: 'day' | 'week' | 'month' | 'year' | 'all';
  page?: number;
  isInfinite?: boolean;
}
export interface GallerySearchQuery {
  sort?: 'viral' | 'top' | 'time';
  window?: 'day' | 'week' | 'month' | 'year' | 'all';
  page?: number;
  query: SearchUrlQuery;
}
export interface SearchUrlQuery {
  q?: string;
  q_any?: string;
  q_all?: string;
  q_exactly?: string;
  q_not?: string;
  q_tags?: string;
  q_type?: string;
  q_size_px?: string;
  q_size_mpx?: string;
  q_size_is_mpx?: string;
}
export interface TagPostsQuery {
  tagName: string;
  page?: number;
  sortOption?: 'viral' | 'time' | 'top';
}
export interface SuggestQuery {
  keyword: string;
}
export interface postQeury {
  postId: string;
  isAlbum?: boolean;
}
export interface PostCommentQuery {
  postId: string;
  sort?: 'best' | 'top' | 'new';
  page?: number;
}
export interface AccountCommentQuery {
  username: string;
  sort?: 'best' | 'worst' | 'oldest' | 'newest';
  page?: number;
}
export interface AccountPostQuery {
  username: string;
  page?: number;
  sort: 'oldest' | 'newest' | 'best';
}
export interface accountFavoriteFolderQuery {
  username: string;
  folderId: string;
  page?: number;
  sort?: 'oldest' | 'newest';
}
