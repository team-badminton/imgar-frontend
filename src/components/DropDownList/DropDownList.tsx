import React, { ReactElement, useState } from 'react';
import { StyledDropDownButton, StyledDropDownUL } from './DropDownList.styled';
import { DropDownListProps } from './DropDownList.type';

export default function DropDownList({
  dropdownHeader,
  dropdownItemList,
  handleDropDownList,
}: DropDownListProps): ReactElement {
  const [isShow, setIsShow] = useState<boolean>(false);
  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <div>
        <StyledDropDownButton onClick={handleShow}>{dropdownHeader}</StyledDropDownButton>
        <StyledDropDownUL isShow={isShow} onClick={handleDropDownList}>
          {dropdownItemList.map((itemName, index) => (
            <li key={index + itemName} className={index === 0 ? 'selected listItem' : 'listItem'}>
              <button>
                <span>{itemName}</span>
              </button>
            </li>
          ))}
        </StyledDropDownUL>
      </div>
    </>
  );
}
