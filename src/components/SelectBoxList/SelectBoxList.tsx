import { createRandomHash } from '@/util/formatUtils';
import React, { ReactElement, useEffect } from 'react';
import { StyledSelectBoxListUL } from './SelectBoxList.styled';
import { SelectBoxListProps } from './SelectBoxList.type';

export default function SelectBoxList({
  onClickHandler,
  className,
  children,
  themeType,
  setIsShow,
  isShow,
}: SelectBoxListProps): ReactElement {
  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.selectBox')) {
        setIsShow?.(false);
      }
    };
    window.addEventListener('mousedown', clickHandler);
    return () => {
      window.removeEventListener('mousedown', clickHandler);
    };
  }, []);
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
