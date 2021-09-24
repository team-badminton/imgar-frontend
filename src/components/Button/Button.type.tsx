import { CSSProperties } from 'react';
import { DefaultTheme } from 'styled-components';

export interface StyledButtonProps {
  /** 버튼의 크기를 설정할 수 있습니다. size는 height를 결정하며, width는 auto 입니다.*/
  size?: 'small' | 'medium' | 'large';
  /** 버튼의 border-radius를 설정할 수 있습니다. */
  borderRadius?: string;
  /** 버튼의 배경색을 설정할 수 있습니다. */
  backgroundColor?: Extract<keyof DefaultTheme['color'], string>;
  /** 버튼의 글자색을 설정할 수 있습니다. */
  color?: Extract<keyof DefaultTheme['color'], string>;
  /** 버튼의 글자 크기를 설정할 수 있습니다. */
  fontSize?: Extract<keyof DefaultTheme['fontSize'], string>;
  /** 호버되었을 때 버튼의 배경색을 설정할 수 있습니다. */
  hoverBackgroundColor?: Extract<keyof DefaultTheme['color'], string>;
  /** 호버되었을 때 글자색을 설정할 수 있습니다. */
  hoverColor?: Extract<keyof DefaultTheme['color'], string>;
  /** 버튼의 margin을 설정할 수 있습니다. */
  margin?: string;
  /** 이미지의 여백(margin)을 설정할 수 있습니다. */
  imageMargin?: string;
  /** 버튼의 padding을 설정할 수 있습니다. */
  padding?: string;
  /** 버튼에 inline 스타일을 적용할 수 있습니다. */
  style?: CSSProperties;
}

export interface ButtonProps extends StyledButtonProps {
  /** img src를 입력한 경우, alt를 설정해야 합니다.*/
  alt?: string;
  /** 좌측 이미지를 삽입할 수 있습니다. 이미지 태그의 속성으로 삽입될 src 혹은 Svg ReactNode를 입력받습니다. */
  img?: string | React.FC<React.SVGProps<SVGSVGElement>>;
  /** 버튼의 text를 설정할 수 있습니다. */
  text?: string;
}
