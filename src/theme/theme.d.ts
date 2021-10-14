import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primaryColor: string;
      secondaryColor: string;
      backgroundGray: string;
      backgroundNavy: string;
      backgroundDarkNavy: string;
      darkGray: string;
      lightGray: string;
      deepLightGray: string;
      blue: string;
      white: string;
      black: string;
      green: string;
      emeraldGreen: string;
      lightBlue: string;
      crimsonRed: string;
      aquaBlue: string;
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
      xl: string;
      xxl: string;
    };
  }
}
