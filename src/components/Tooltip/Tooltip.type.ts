export interface TooltipBoxProps {
  arrow: 'up' | 'down';
  arrowOffset?: number;
}

export interface TooltipProps {
  children: React.ReactNode;
  tooltipText: string;
  to?: string;
}
