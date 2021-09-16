export function pxToRem(px: number | string): string {
  return parseInt(px as string) / 16 + 'rem';
}
