import { createRandomHash } from '@/util/formatUtils';
import React, { ReactElement } from 'react';
import { StyledSelectBoxListUL } from './SelectBoxList.styled';
import { SelectBoxListProps } from './SelectBoxList.type';

export default function SelectBoxList({
  onClickHandler,
  className,
  children,
  isShow,
  themeType,
}: SelectBoxListProps): ReactElement {
  return (
    <StyledSelectBoxListUL isShow={isShow} className={className} themeType={themeType} onClick={onClickHandler}>
      {children.map(child => (
        <li className="listItem" key={createRandomHash()}>
          {child}
        </li>
      ))}
    </StyledSelectBoxListUL>
  );
}

SelectBoxList.defaultProps = {
  isShow: true,
  themeType: 'dark',
};
