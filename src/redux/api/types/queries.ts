export interface GalleryQuery {
  section?: 'mostViral' | 'userSubmitted' | 'highestScoring';
  sort?: 'popular' | 'newest' | 'best' | 'random' | 'rising';
  window?: 'day' | 'week' | 'month' | 'year' | 'all';
  page?: number;
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
}
export interface accountFavoriteFolderQuery {
  username: string;
  folderId: string;
  page?: number;
  sort?: 'oldest' | 'newest';
}
