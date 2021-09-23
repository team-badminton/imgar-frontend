import { CSSProperties } from 'react';

export interface StyledImageProps {
  /** 이미지의 width를 설정할 수 있습니다. */
  $width?: string | number;
  /** 이미지의 해상도를 결정할 수 있습니다. */
  fidelity?: 'grand' | 'high';
  /** 이미지의 fit을 설정할 수 있습니다. */
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  /** 이미지를 원형으로 설정할 수 있습니다. */
  isCircle?: boolean;
}

export interface ImageProps extends StyledImageProps {
  /** Image의 hash 값을 입력합니다. */
  id?: string;
  /** 이미지 url을 입력합니다. */
  src?: string;
  /** 대체 텍스트를 설정할 수 있습니다. */
  alt?: string;
  /** 이미지에 inline 스타일을 적용할 수 있습니다. */
  style?: CSSProperties;
}
