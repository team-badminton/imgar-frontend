import React, { ReactElement, useState } from 'react';
import { TooltipBox, TooltipWrapper } from './Tooltip.styled';
import { TooltipBoxProps, TooltipProps } from './Tooltip.type';

export default function Tooltip({ children, tooltipText }: TooltipProps): ReactElement {
  const [isHover, setIsHover] = useState<boolean>(false);
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

  return (
    <TooltipWrapper
      onMouseEnter={() => {
        setTooltipPosition(getTooltipArrowDirection());
        setIsHover(true);
      }}
      onMouseLeave={() => setIsHover(false)}
      ref={elementRef}
    >
      {children}
      {isHover && <TooltipBox arrow={tooltipPosition}>{tooltipText}</TooltipBox>}
    </TooltipWrapper>
  );
}
