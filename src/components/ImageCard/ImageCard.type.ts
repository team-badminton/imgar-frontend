import React, { Ref } from 'react';
import { PostV1Info } from '../../redux/storeTypes';

export interface SetDisplayProps {
  /** 이미지 카드의 width를 설정할 수 있습니다. */
  imageCardWidth?: string | number;
  imageCardHeight?: string | number;
}

export interface ImageContainerProps {
  layoutOption: 'waterfall' | 'uniform';
}

export interface ImageCardProps extends SetDisplayProps, ImageContainerProps {
  style?: React.CSSProperties;
  className?: string;
  isAutoPlay: boolean;
  postInfo: PostV1Info;
  isLazyLoading: boolean;
}

export interface StyledArticleProps extends SetDisplayProps {
  ref?: Ref<HTMLElement>;
}

export interface FakeImageCardProps {
  /** 이미지 카드의 width를 설정할 수 있습니다. */
  imageCardWidth?: string | number;
  imageCardHeight?: string | number;
}
