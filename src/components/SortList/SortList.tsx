import React, { ReactElement, useCallback, useState } from 'react';
import { SelectBox, SelectBoxHeader, SelectBoxList } from '..';

interface Props {
  items: string[];
  selectedItem: string;
  setItem: (item: string) => void;
}

function camelCaseToUpperCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase();
}

export default function SortList({ items, selectedItem, setItem }: Props): ReactElement {
  const [isShow, setIsShow] = useState<boolean>(false);
  const selectHandler = useCallback<React.MouseEventHandler<HTMLUListElement>>(e => {
    const target = e.target as HTMLElement;
    if (target.closest('li')) {
      setItem(target.dataset.item);
    }
    setIsShow(false);
  }, []);
  const toggleList: React.MouseEventHandler<HTMLButtonElement> = () => setIsShow(state => !state);

  return (
    <SelectBox>
      <SelectBoxHeader onClickHandler={toggleList}>{camelCaseToUpperCase(selectedItem)}</SelectBoxHeader>
      <SelectBoxList isShow={isShow} onClickHandler={selectHandler}>
        {items.map(item => {
          console.log(item, selectedItem);
          return (
            <button key={item} data-item={item} css={item === selectedItem ? 'font-weight: bold;' : null}>
              {camelCaseToUpperCase(item)}
            </button>
          );
        })}
      </SelectBoxList>
    </SelectBox>
  );
}
