import { ReactElement } from 'react';

export interface DropDownListProps {
  dropdownHeader: string;
  handleDropDownList: React.MouseEventHandler<HTMLUListElement>;
  children: ReactElement[];
}

export interface SetDisplayProps {
  isShow: boolean;
}
