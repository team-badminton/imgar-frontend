import { DefaultTheme } from 'styled-components';
import { pxToRem } from '../util/styleUtils';

export const defaultTheme: DefaultTheme = {
  color: {
    primaryColor: `#1bb76e`,
    secondaryColor: `#6432f9`,
    backgroundGray: `#2e3035`,
    backgroundNavy: `#171544`,
    backgroundDarkNavy: `#061234`,
    darkGray: `#474a51`,
    lightGray: `#b4b9c2`,
    blue: `#4a58fb`,
    white: `#f2f2f2`,
    black: `#181818`,
    emeraldGreen: `#44d0bd`,
    lightBlue: `#8da6c9`,
  },
  fontSize: {
    xs: pxToRem(12),
    s: pxToRem(14),
    m: pxToRem(15),
    l: pxToRem(16),
    xl: pxToRem(18),
    xxl: pxToRem(24),
  },
  spaceSize: {
    xs: pxToRem(4),
    s: pxToRem(8),
    r: pxToRem(12),
    m: pxToRem(16),
    l: pxToRem(24),
    xl: pxToRem(32),
  },
  borderRadius: {
    s: pxToRem(3),
    l: pxToRem(5),
    xl: pxToRem(6),
  },
};
