import { PostV1Info } from '@/redux/storeTypes';

export interface MasonryGalleryProps {
  posts: PostV1Info[];
  id?: string;
}

export interface SetPositionProps {
  column: number;
  row: number;
  sumOfImageHeightPx: number;
  sumOfAboveImageHeightPx: number;
}

export interface StyledImageCardProps {
  setPositionProps: SetPositionProps;
}

export interface ImageCardPositionInfosType {
  [key: string]: SetPositionProps;
}
