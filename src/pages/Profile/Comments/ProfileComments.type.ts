export type ProfileCommentsSort = 'newest' | 'oldest' | 'best';

export interface ProfileCommentsHeaderState {
  setSort: (s: ProfileCommentsSort) => void;
  sorted: string;
}
