import { ReactNode } from 'react';

export interface SelectBoxListProps extends StyledSelectBoxListULProps {
  children: ReactNode[];
  className?: string;
  onClickHandler: React.MouseEventHandler<HTMLUListElement>;
}
export interface StyledSelectBoxListULProps {
  isShow?: boolean;
  themeType?: 'dark' | 'light';
}
