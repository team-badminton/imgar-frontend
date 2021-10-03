import { RootState } from '@/redux';
import { setCategory, setSortOption } from '@/redux/slices/listInfoReducer';
import React, { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledDropDownButton, StyledDropDownUL } from './DropDownList.styled';
import { DropDownListProps } from './DropDownList.type';

export default function DropDownList({ dropdownType, dropdownItemList }: DropDownListProps): ReactElement {
  const dispatch = useDispatch();

  const dropdownHeader = useSelector((state: RootState) =>
    dropdownType === 'category' ? state.listInfo.category : state.listInfo.sortOption,
  );

  const [isShow, setIsShow] = useState<boolean>(false);
  const handleShow = () => {
    setIsShow(!isShow);
  };

  const handleCategory = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const $target = e.target as HTMLElement;
    const $li = $target.closest('.listItem');
    if (!$li) {
      return;
    }
    const $prevSelected = document.querySelector('.selected');
    $prevSelected.classList.remove('selected');
    $li.classList.add('selected');

    if (dropdownType === 'category') {
      const newCategory = $li.children[0].children[0].textContent;
      dispatch(setCategory(newCategory));
    }
    if (dropdownType === 'sortOption') {
      const newSortOption = $li.children[0].children[0].textContent;
      dispatch(setSortOption(newSortOption));
    }
    setIsShow(!isShow);
  };

  return (
    <>
      <div>
        <StyledDropDownButton onClick={handleShow}>{dropdownHeader}</StyledDropDownButton>
        <StyledDropDownUL isShow={isShow} onClick={handleCategory}>
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
