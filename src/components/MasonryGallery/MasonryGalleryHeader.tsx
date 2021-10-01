import React, { ReactElement, useState } from 'react';
import { toggleAutoPlay } from '@/redux/slices/listInfoReducer';
import { useDispatch } from 'react-redux';
import { ReactComponent as AnimationPlayIconSVG } from '@/assets/Icon/animationPlayIcon.svg';
import { DropDownList } from '@/components';

export default function MasonryGalleryHeader(): ReactElement {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleAutoPlay());
  };

  const dropdowmItemList = ['MOST VIRAL', 'USER SUBMITTED', 'HIGHEST SCORING'];

  const [category, setCategory] = useState<string>(dropdowmItemList[0]);

  const handleCategory = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const $target = e.target as HTMLElement;
    const $li = $target.closest('.listItem');
    if (!$li) {
      return;
    }
    const $prevSelected = document.querySelector('.selected');
    $prevSelected.classList.remove('selected');
    $li.classList.add('selected');
    setCategory($li.children[0].children[0].textContent);
  };
  return (
    <div>
      <DropDownList dropdownHeader={category} dropdownItemList={dropdowmItemList} buttonOnClick={handleCategory} />
      <button onClick={handleToggle}>
        <AnimationPlayIconSVG />
      </button>
    </div>
  );
}
