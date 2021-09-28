import { PostInfo } from '../../redux/storeTypes';

export interface SetDisplayProps {
  /** 이미지 카드의 width를 설정할 수 있습니다. */
  imageCardWidth?: string | number;
  imageCardHeight?: string | number;
}

export interface ImageCardProps {
  postInfo: PostInfo;
  isAutoPlay?: boolean;
  imageCardWidth?: string | number;
}
