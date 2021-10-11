import React, { ReactElement, useCallback, useState } from 'react';
import { SelectBox, SelectBoxHeader, SelectBoxList } from '..';

interface Props {
  items: string[];
  selectedItem: string;
  setItem: (item: string) => void;
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
      <SelectBoxHeader onClickHandler={toggleList}>{selectedItem.toUpperCase()}</SelectBoxHeader>
      <SelectBoxList isShow={isShow} onClickHandler={selectHandler}>
        {items.map(item => (
          <button key={item} data-item={item} css={item === selectedItem ? 'font-weight: bold;' : null}>
            {item.toUpperCase()}
          </button>
        ))}
      </SelectBoxList>
    </SelectBox>
  );
}
