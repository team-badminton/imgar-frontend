export interface FolderIconProps {
  active?: boolean;
}

export interface ProfileFavoriteFoldersProps {
  username: string;
}

export interface ScrollButtonProps {
  $direction: 'prev' | 'next';
}

export interface ProfileFavoriteProps {
  categoryTitle: string;
}

export type ProfileFavoriteSort = 'oldest' | 'newest';

export interface ProfileFavoriteHeaderState {
  setSort: (s: ProfileFavoriteSort) => void;
  sorted: string;
}
