import { ReactElement } from 'react';

interface a extends HTMLUListElement {
  $selectedLi: Element;
  $selectedChild: ReactElement;
}

export interface DropDownListProps {
  children: ReactElement[];
  themeType?: 'dark' | 'light';
  handlerOption?:
    | {
        useType: 'selectBox';
        handleDropDownList: (
          $selectedLi: Element,
          $selectedChild: ReactElement,
        ) => React.MouseEventHandler<HTMLUListElement>;
      }
    | {
        useType: 'itemBox';
        dropdownHeader: ReactElement | string;
        handleDropDownItems: React.MouseEventHandler<HTMLButtonElement>[];
      };
}

export interface SetDisplayProps {
  isShow: boolean;
  themeType?: 'dark' | 'light';
  useType: 'selectBox' | 'itemBox';
}
