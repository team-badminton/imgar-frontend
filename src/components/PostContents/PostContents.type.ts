import { ImageInfo, TagInfo } from '@/redux/storeTypes';

export interface PostContentsProps {
  className?: string;
  /** Gallery api를 통해 받아온 응답 json에서 images prop 배열입니다. image를 불러오기 위한 id와 description을 사용합니다. */
  images: ImageInfo[];
  /** Gallery api를 통해 받아온 응답 json에서 tags prop 배열입니다. */
  tags: TagInfo[];
}

export interface StyledTagProps {
  backgroundImageId: TagInfo['backgroundImageId'];
}
