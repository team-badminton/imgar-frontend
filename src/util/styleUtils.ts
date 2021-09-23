import { css } from 'styled-components';

export function pxToRem(px: number | string): string {
  return parseInt(px as string) / 16 + 'rem';
}

export const a11yHidden = css`
  overflow: hidden;
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip-path: circle(0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
`;
