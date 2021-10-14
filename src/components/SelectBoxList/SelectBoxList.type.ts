import { ReactNode } from 'react';

export interface SelectBoxListProps extends StyledSelectBoxListULProps {
  children: ReactNode[];
  className?: string;
  onClickHandler?: React.MouseEventHandler<HTMLUListElement>;
  setIsShow?: (state: boolean) => void;
}
export interface StyledSelectBoxListULProps {
  themeType?: 'dark' | 'light';
  isShow?: boolean;
}
