import { TypePrefixer } from '@/util/typeUtils';
import { ImageProps } from '@/components';

export type AvatarProps = TypePrefixer<Omit<ImageProps, '$width' | 'alt'>, 'image'> & {
  /** userName은 계정(account)의 id로 필수 속성입니다.*/
  userName: string;
  extraInfos: string[];
  /** Avatar의 전체적인 크기를 설정할 수 있습니다.*/
  size: 'small' | 'medium' | 'large';
  /** Avatar의 정보를 몇 줄로 표기할 것 인지 설정합니다. */
  infoLines: 1 | 2 | 3;
  to: string;
  /** className을 설정할 수 있습니다. */
  className?: string;
};
