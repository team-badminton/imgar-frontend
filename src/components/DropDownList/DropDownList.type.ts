import { ReactNode } from 'react';

export interface DropDownListProps {
  children: ReactNode[];
  themeType?: 'dark' | 'light';
  handlerOption?:
    | {
        useType: 'selectBox';
        handleDropDownList: (
          $selectedLi: HTMLLIElement,
          $selectedChild: ReactNode,
        ) => React.MouseEventHandler<HTMLUListElement>;
      }
    | {
        useType: 'itemBox';
        dropdownHeader: ReactNode;
        handleDropDownItems: React.MouseEventHandler<HTMLButtonElement>[];
      };
}

export interface SetDisplayProps {
  isShow: boolean;
  themeType?: 'dark' | 'light';
  useType: 'selectBox' | 'itemBox';
}
