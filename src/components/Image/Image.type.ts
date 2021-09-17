import CSS from 'csstype';

export interface PictureProps {
  /** 이미지의 width를 설정할 수 있습니다. */
  width?: string;
  /** 이미지의 fit을 설정할 수 있습니다. */
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  /** 이미지를 원형으로 설정할 수 있습니다. */
  isCircle?: boolean;
}

export interface ImageProps extends PictureProps {
  id: string;
  /** 이미지 url을 입력합니다. */
  src: string;
  /** 대체 텍스트를 설정할 수 있습니다. */
  alt?: string;
  /** 이미지에 inline 스타일을 적용할 수 있습니다. */
  style?: CSS.Properties;
}
