import { PostInfo } from '../../redux/storeTypes';

export interface SetDisplayProps {
  /** 이미지 카드의 width를 설정할 수 있습니다. */
  imageCardWidth?: string | number;
  imageCardHeight?: string | number;
}

export interface ImageContainerProps {
  layoutOption: 'waterfall' | 'uniform';
}

export interface ImageCardProps {
  style?: React.CSSProperties;
  className?: string;
  isAutoPlay: boolean;
  postInfo: PostInfo;
  imageCardWidth: string | number;
  layoutOption: 'uniform' | 'waterfall';
}
