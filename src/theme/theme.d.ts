import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primaryColor: string;
      secondaryColor: string;
      backgroundGray: string;
      backgroundNavy: string;
      deepDarkGray: string;
      darkGray: string;
      lightGray: string;
      blue: string;
      white: string;
      black: string;
      emeraldGreen: string;
      lightBlue: string;
    };
    fontSize: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };

    spaceSize: {
      xs: string;
      s: string;
      r: string;
      m: string;
      l: string;
      xl: string;
    };

    borderRadius: {
      s: string;
      l: string;
    };
  }
}
