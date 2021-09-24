import { TypePrefixer } from '@/util/typeUtils';
import { ImageProps } from '@/components';

export type AvatarProps = TypePrefixer<Omit<ImageProps, '$width'>, 'image'> & {
  userName: string;
  extraInfos?: string[];
  size?: 'small' | 'medium' | 'large';
  infoLines?: 1 | 2 | 3;
  to: string;
};
