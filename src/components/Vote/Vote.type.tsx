import { DefaultTheme } from 'styled-components';

export interface VoteProps {
  size: 'small' | 'large';
  color: Extract<keyof DefaultTheme['color'], string>;
  count: number;
  direction: 'row' | 'column';
}

export interface OutputProps {
  size: VoteProps['size'];
  color: VoteProps['color'];
}

export interface ContainterProps {
  size: VoteProps['size'];
  color: VoteProps['color'];
  selectedButton?: 'up-btn' | 'down-btn';
  direction: VoteProps['direction'];
}
