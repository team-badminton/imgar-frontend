export interface SetPositionProps {
  column: number;
  row: number;
  sumOfImageHeightPx: number;
  sumOfAboveImageHeightPx: number;
}

export interface StyledImageCardProps {
  setPositionProps: SetPositionProps;
}
