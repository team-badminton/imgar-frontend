export function formattedNumber(num: number | string) {
  return num.toLocaleString('en-US');
}

export function createRandomHash(length = 8) {
  return Math.random().toString(36).substr(2, length);
}

const formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a sec',
    other: 'less than {{count}} sec',
  },
  xSeconds: {
    one: '1 sec',
    other: '{{count}} sec',
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a min',
    other: 'less than {{count}} min',
  },
  xMinutes: {
    one: '1 min',
    other: '{{count}} min',
  },
  aboutXHours: {
    one: '1 hr',
    other: '{{count}} hor',
  },
  xHours: {
    one: '1 hr',
    other: '{{count}} hr',
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days',
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks',
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks',
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months',
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months',
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years',
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years',
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years',
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years',
  },
};

export const formatDistance = (token: keyof typeof formatDistanceLocale, count: number, options: any) => {
  let result;
  const tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};
