import React, { ReactElement, useState } from 'react';
import { StyledDropDownButton, StyledDropDownUL } from './DropDownList.styled';
import { DropDownListProps } from './DropDownList.type';

export const addSelectedClass = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
  const $target = e.target as HTMLElement;
  const $li = $target.closest('.listItem');
  if (!$li) {
    return;
  }
  const $ul = $target.closest('.list');
  Array.from($ul.children).forEach($child => {
    $child.classList.remove('selected');
  });
  $li.classList.add('selected');
  return $li;
};

export default function DropDownList({
  dropdownHeader,
  handleDropDownList,
  children,
  themeType,
}: DropDownListProps): ReactElement {
  const [isShow, setIsShow] = useState<boolean>(false);
  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <div>
        <StyledDropDownButton onClick={handleShow}>{dropdownHeader}</StyledDropDownButton>
        <StyledDropDownUL className={'list'} isShow={isShow} themeType={themeType} onClick={handleDropDownList}>
          {children.map((child, index) => (
            <li key={index} className={index === 0 ? 'selected listItem' : 'listItem'}>
              <button>{child}</button>
            </li>
          ))}
        </StyledDropDownUL>
      </div>
    </>
  );
}

DropDownList.defaultProps = {
  themeType: 'dark',
};
