export function formattedNumber(num: number | string) {
  return num.toLocaleString('en-US');
}

export function isValidUrlFormat(str: string) {
  let url;

  try {
    url = new URL(str);
  } catch {
    return false;
  }

  return url.protocol === 'http:' || url.protocol === 'https:';
}
