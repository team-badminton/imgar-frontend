import { CSSProperties } from 'react';

export interface StyledImageProps {
  /** 이미지의 width를 설정할 수 있습니다. */
  imageWidth?: string | number;
  /** 이미지의 height를 설정할 수 있습니다. */
  imageHeight?: string | number;
  /** 이미지의 해상도를 결정할 수 있습니다. */
  fidelity?: 'grand' | 'high';
  /** 이미지의 fit을 설정할 수 있습니다. */
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  /** 이미지를 원형으로 설정할 수 있습니다. */
  isCircle?: boolean;
  /** 이미지를 지연로딩할 지 여부를 설정할 수 있습니다. */
  isLazyLoading?: boolean;
  inView?: boolean;
}

export interface PictureProps extends StyledImageProps {
  /** 대체 텍스트를 설정할 수 있습니다. */
  alt?: string;
  /** 클래스 이름을 설정할 수 있습니다. */
  className?: string;
  /** imageId는 image 리소스를 요청하기 위한 id(hash) 값 입니다. id와 매칭되는 image 데이터를 요청합니다. */
  imageId?: string;
  /** img를 클릭시 호출할 핸들러를 설정할 수 있습니다. */
  onClick?: React.MouseEventHandler<HTMLImageElement>;
  /** hash가 아닌 image가 위치하고 있는 url(src)을 주소를 통해 데이터를 요청합니다. */
  src?: string;
  /** 이미지에 inline 스타일을 적용할 수 있습니다. */
  style?: CSSProperties;
  /** tabIndex를 입력하면 포커스가 가도록 설정할 수 있습니다. */
  tabIndex?: number;
}
