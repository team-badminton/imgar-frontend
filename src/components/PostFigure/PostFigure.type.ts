import { ImageInfo } from '@/redux/storeTypes';

export interface PostFigureProps {
  /** image의 타입을 입력해야 합니다. */
  type: ImageInfo['type'];
  /** image 리소스를 요청하기 위한 id(hash)를 의미합니다. */
  imageId: ImageInfo['id'];
  /** image의 원본 width를 의미합니다. */
  orgImageWidth: ImageInfo['imageWidth'];
  /** image의 원본 height를 의미합니다. */
  orgImageHeight: ImageInfo['imageHeight'];
  /** author에 의해 작성된 image에 대한 설명입니다. */
  description: string | null;
}

export interface StyledVideoProps {
  videoWidth: ImageInfo['imageWidth'];
  videoHeight: ImageInfo['imageHeight'];
}

export interface StyledPictureProps {
  isZoomAble: boolean;
  isVisibleModal?: boolean;
}
