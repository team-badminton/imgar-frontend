import React, { ReactElement } from 'react';
import { toggleAutoPlay, toggleView } from '@/redux/slices/listInfoReducer';
import { useDispatch } from 'react-redux';
import { ReactComponent as AnimationPlayIconSVG } from '@/assets/Icon/animationPlayIcon.svg';
import { ReactComponent as AnimationPauseIconSVG } from '@/assets/Icon/animationPause.svg';
import { ReactComponent as UniformLayoutIconSVG } from '@/assets/Icon/uniformLayoutIcon.svg';
import { ReactComponent as WaterfallLayoutIconSVG } from '@/assets/Icon/waterfallLayoutIcon.svg';
import { StyledDiv } from './MasonryGalleryOption.styled';
import { useTypedSelector } from '@/redux';

export default function MasonryGalleryOptions(): ReactElement {
  const dispatch = useDispatch();

  const isAnimation = useTypedSelector(state => state.listInfo.autoPlay);
  const layoutOption = useTypedSelector(state => state.listInfo.layout);

  const handleAnimationToggle = () => {
    dispatch(toggleAutoPlay());
  };
  const handleLayoutToggle = () => {
    dispatch(toggleView());
  };

  return (
    <StyledDiv>
      <button onClick={handleAnimationToggle}>
        {isAnimation ? (
          <AnimationPlayIconSVG title="animation pause" />
        ) : (
          <AnimationPauseIconSVG title="animation play" />
        )}
      </button>
      <button onClick={handleLayoutToggle}>
        {layoutOption === 'uniform' ? (
          <UniformLayoutIconSVG title="change layout to waterfall" />
        ) : (
          <WaterfallLayoutIconSVG title="change layout to uniform" />
        )}
      </button>
    </StyledDiv>
  );
}
