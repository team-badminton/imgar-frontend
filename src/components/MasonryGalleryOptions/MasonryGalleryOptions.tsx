import React, { ReactElement } from 'react';
import { toggleAutoPlay, toggleView } from '@/redux/slices/listInfoReducer';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as AnimationPlayIconSVG } from '@/assets/Icon/animationPlayIcon.svg';
import { ReactComponent as UniformLayoutIconSVG } from '@/assets/Icon/uniformLayoutIcon.svg';

export default function MasonryGalleryOptions(): ReactElement {
  const dispatch = useDispatch();
  const handleAnimationToggle = () => {
    dispatch(toggleAutoPlay());
  };
  const handleLayoutToggle = () => {
    dispatch(toggleView());
  };

  return (
    <div>
      <button onClick={handleAnimationToggle}>
        <AnimationPlayIconSVG />
      </button>
      <button onClick={handleLayoutToggle}>
        <UniformLayoutIconSVG />
      </button>
    </div>
  );
}
