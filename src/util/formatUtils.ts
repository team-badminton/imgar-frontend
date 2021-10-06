export function formattedNumber(num: number | string) {
  return num.toLocaleString('en-US');
}

export function createRandomHash(length = 8) {
  return Math.random().toString(36).substr(2, length);
}
