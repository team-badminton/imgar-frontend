export type ProfilePostSort = 'oldest' | 'newest' | 'best';

export interface ProfilePostHeaderState {
  setSort: (s: ProfilePostSort) => void;
  sorted: string;
}
