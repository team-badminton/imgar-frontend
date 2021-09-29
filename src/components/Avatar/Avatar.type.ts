export interface AvatarProps {
  /** userName은 계정(account)의 id로 필수 속성입니다.*/
  username: string;
  /** Avatar imageSize를 결정합니다. small: 24px, medium: 32px*/
  size: 'small' | 'medium';
  /** Avatar의 정보를 몇 줄로 표기할 것인지 결정할 수 있습니다. */
  infoRows: 1 | 2;
  /** Avatar의 메타정보를 입력합니다. */
  metaInfos: {
    views?: number;
    time: number;
    platform?: 'Android' | 'Iphone' | 'Web';
  };
  /** 호버되었을 때 이미지가 scale되는 비율을 설정합니다. */
  transScaleImage?: number;
}
