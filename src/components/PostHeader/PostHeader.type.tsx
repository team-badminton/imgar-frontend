import { AvatarProps } from '../Avatar/Avatar.type';

export interface PostHeaderProps extends Pick<AvatarProps, 'username' | 'metaInfos'> {
  // ** POST(Gallery page)의 제목입니다. *//
  title: string;
}
