import { ReactElement } from 'react';

export interface DropDownListProps {
  dropdownHeader: ReactElement | string;
  handleDropDownList: React.MouseEventHandler<HTMLUListElement>;
  children: ReactElement[];
  themeType?: 'dark' | 'light';
}

export interface SetDisplayProps {
  isShow: boolean;
  themeType?: 'dark' | 'light';
}
