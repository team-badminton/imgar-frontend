import { createRandomHash } from '@/util/formatUtils';
import React, { ReactElement, useCallback, useState } from 'react';
import { TooltipBox, TooltipWrapper } from './Tooltip.styled';
import { TooltipBoxProps, TooltipProps } from './Tooltip.type';

export default React.memo(function Tooltip({ children, tooltipText, to }: TooltipProps): ReactElement {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [tooltipPosition, setTooltipPosition] = useState<TooltipBoxProps['arrow']>('down');
  const [tooltipOffset, setTooltipOffset] = useState<number>(0);
  const elementRef = React.createRef<HTMLDivElement>();
  const getTooltipArrowDirection = (): void => {
    const { innerHeight, innerWidth } = window;
    const clientRect = elementRef.current.getBoundingClientRect();

    if (innerWidth - clientRect.right - clientRect.width / 2 < 362 / 2) {
      setTooltipOffset((362 - clientRect.width) / 2);
    } else if (clientRect.left + clientRect.width / 2 < 362 / 2) {
      setTooltipOffset(((362 - clientRect.width) / 2) * -1);
    } else {
      setTooltipOffset(0);
    }

    if (innerHeight - clientRect.bottom < 200) {
      setTooltipPosition('down');
    } else {
      setTooltipPosition('up');
    }
  };

  const showTooltip = useCallback(() => {
    getTooltipArrowDirection();
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
        <TooltipBox id={randomId} role="tooltip" arrow={tooltipPosition} arrowOffset={tooltipOffset}>
          {tooltipText}
        </TooltipBox>
      )}
    </TooltipWrapper>
  );
});
