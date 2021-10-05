import React, { ReactElement, useEffect, useState } from 'react';
import { StyledDropDownButton, StyledDropDownUL } from './DropDownList.styled';
import { DropDownListProps } from './DropDownList.type';

export default function DropDownList({ children, themeType, handlerOption }: DropDownListProps): ReactElement {
  const [isShow, setIsShow] = useState<boolean>(false);
  const handleShow = () => {
    setIsShow(!isShow);
  };

  const [selectBoxHeader, setSelectBoxHeader] = useState<ReactElement>(children[0]);
  useEffect(() => {
    setSelectBoxHeader(children[0]);
  }, [children[0]]);

  const selectBoxItem = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const $target = e.target as HTMLElement;
    const $selectedLi = $target.closest('.listItem');
    if (!$selectedLi) {
      return;
    }
    const $ul = $target.closest('.list');
    Array.from($ul.children).forEach($child => {
      $child.classList.remove('selected');
    });
    $selectedLi.classList.add('selected');
    const $selectedChild = children[Number($selectedLi.id.replace('listItem', ''))];
    setSelectBoxHeader($selectedChild);
    return { $selectedLi: $selectedLi, $selectedChild: $selectedChild };
  };

  const handleSelectBox = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const { $selectedLi, $selectedChild } = selectBoxItem(e);
    handlerOption.useType === 'selectBox' && handlerOption.handleDropDownList($selectedLi, $selectedChild)(e);
  };

  return (
    <>
      <div>
        <StyledDropDownButton onClick={handleShow}>{selectBoxHeader}</StyledDropDownButton>
        <StyledDropDownUL
          useType={handlerOption.useType}
          className={'list'}
          isShow={isShow}
          themeType={themeType}
          onClick={handleSelectBox}
        >
          {children.map((child, index) => (
            <li
              key={index}
              className={index === 0 && handlerOption.useType === 'selectBox' ? 'selected listItem' : 'listItem'}
              id={'listItem' + index}
            >
              <button onClick={handlerOption.useType === 'itemBox' ? handlerOption.handleDropDownItems[index] : null}>
                {child}
              </button>
            </li>
          ))}
        </StyledDropDownUL>
      </div>
    </>
  );
}

DropDownList.defaultProps = {
  themeType: 'dark',
  handlerOption: {
    useType: 'selectBox',
    handleDropDownList:
      ($selectedLi: Element, $selectedChild: ReactElement) => (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
        console.log($selectedLi, $selectedChild, e);
      },
  },
};
