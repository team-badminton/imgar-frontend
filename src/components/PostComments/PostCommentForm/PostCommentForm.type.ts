import { DefaultTheme } from 'styled-components';

export interface Color {
  color?: Extract<keyof DefaultTheme['color'], string>;
}
