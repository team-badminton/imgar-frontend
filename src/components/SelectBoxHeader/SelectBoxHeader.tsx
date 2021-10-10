import React, { ReactElement } from 'react';
import { SelectBoxHeaderButton } from './SelectBoxHeader.styled';
import { SelectBoxHeaderProps } from './SelectBoxHeader.type';

export default function SelectBoxHeader({ className, children, onClickHandler }: SelectBoxHeaderProps): ReactElement {
  return (
    <SelectBoxHeaderButton className={className} onClick={onClickHandler}>
      {children}
    </SelectBoxHeaderButton>
  );
}
