import React, { ReactElement } from 'react';
import { toggleAutoPlay } from '@/redux/slices/listInfoReducer';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as AnimationPlayIconSVG } from '@/assets/Icon/animationPlayIcon.svg';
import { DropDownList } from '@/components';
import { RootState } from '@/redux';

export default function MasonryGalleryHeader(): ReactElement {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleAutoPlay());
  };

  const dropdowmItemList = ['MOST VIRAL', 'USER SUBMITTED', 'HIGHEST SCORING'];

  const category = useSelector((state: RootState) => state.listInfo.category);

  return (
    <div>
      <DropDownList dropdownHeader={category} dropdownItemList={dropdowmItemList} />
      <button onClick={handleToggle}>
        <AnimationPlayIconSVG />
      </button>
    </div>
  );
}
