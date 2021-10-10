import { ReactNode } from 'react';

export interface SelectBoxHeaderProps {
  children: ReactNode;
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}
