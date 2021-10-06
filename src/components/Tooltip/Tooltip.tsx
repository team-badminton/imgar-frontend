import { createRandomHash } from '@/util/formatUtils';
import React, { ReactElement, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { TooltipBox, TooltipWrapper } from './Tooltip.styled';
import { TooltipBoxProps, TooltipProps } from './Tooltip.type';

export default React.memo(function Tooltip({ children, tooltipText, to }: TooltipProps): ReactElement {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [tooltipPosition, setTooltipPosition] = useState<TooltipBoxProps['arrow']>('down');
  const elementRef = React.createRef<HTMLDivElement>();
  const getTooltipArrowDirection = (): TooltipBoxProps['arrow'] => {
    const { innerHeight } = window;
    if (innerHeight - elementRef.current.getBoundingClientRect().bottom < 200) {
      return 'down';
    } else {
      return 'up';
    }
  };
  const showTooltip = useCallback(() => {
    setTooltipPosition(getTooltipArrowDirection());
    setIsShow(true);
  }, [getTooltipArrowDirection]);
  const hideTooltip = useCallback(() => {
    setIsShow(false);
  }, []);
  const randomId = createRandomHash();
  return (
    <TooltipWrapper
      onMouseEnter={showTooltip}
      onFocus={showTooltip}
      onMouseLeave={hideTooltip}
      onBlur={hideTooltip}
      ref={elementRef}
      {...(to ? { to } : { as: 'div', tabIndex: 0 })}
      aria-describedby={randomId}
    >
      {children}
      {isShow && (
        <TooltipBox id={randomId} role="tooltip" arrow={tooltipPosition}>
          {tooltipText}
        </TooltipBox>
      )}
    </TooltipWrapper>
  );
});
