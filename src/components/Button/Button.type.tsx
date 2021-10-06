import { CSSProperties, MouseEventHandler } from 'react';
import { DefaultTheme } from 'styled-components';

type colors = Extract<keyof DefaultTheme['color'], string>;

export interface StyledButtonProps {
  /** 버튼의 크기를 설정할 수 있습니다. size는 height를 결정하며, width는 auto 입니다. custom을 입력할 경우 외부에서 css를 적용해야 합니다.*/
  size: 'small' | 'medium' | 'large' | 'custom';
  /** 버튼의 배경색을 설정할 수 있습니다. */
  $backgroundColor?: colors;
  /** 버튼의 글자색을 설정할 수 있습니다. */
  $color: colors;
  /** 버튼의 글자 크기를 설정할 수 있습니다. */
  fontSize?: Extract<keyof DefaultTheme['fontSize'], string>;
  /** 호버되었을 때 버튼의 배경색을 설정할 수 있습니다. */
  $hoverBackgroundColor?: colors;
  /** 호버되었을 때 글자색을 설정할 수 있습니다. */
  $hoverColor?: colors;
  /** Link 컴포넌트의 to prop으로 전달됩니다. */
  to?: string;
  /** 버튼에 inline 스타일을 적용할 수 있습니다. */
  style?: CSSProperties;
}

export interface ButtonProps
  extends Omit<StyledButtonProps, '$backgroundColor' | '$color' | '$hoverBackgroundColor' | '$hoverColor'> {
  /** img prop을 사용한 경우, alt를 설정해야 합니다.*/
  alt?: string;
  /** 버튼의 배경색을 설정할 수 있습니다. */
  backgroundColor?: StyledButtonProps['$backgroundColor'];
  /** 버튼의 글자색을 설정할 수 있습니다. */
  color: StyledButtonProps['$color'];
  /** className을 입력할 수 있습니다. */
  className?: string;
  /** 호버되었을 때 버튼의 배경색을 설정할 수 있습니다. */
  hoverBackgroundColor?: StyledButtonProps['$hoverBackgroundColor'];
  /** 호버되었을 때 글자색을 설정할 수 있습니다. */
  hoverColor?: StyledButtonProps['$hoverColor'];
  /** 좌측 이미지를 삽입할 수 있습니다. 이미지 태그의 속성으로 삽입될 src 혹은 Svg ReactNode를 입력받습니다. */
  img?: string | React.FC<React.SVGProps<SVGSVGElement>>;
  /** 버튼의 text를 설정할 수 있습니다. */
  text?: string;
  /** 버튼의 클릭 이벤트를 설정할 수 있습니다. */
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}
