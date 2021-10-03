import { ThrottleSettings } from 'lodash';
import throttle from 'lodash/throttle';
import { useCallback } from 'react';

export default function useThrottle(func: (...args: unknown[]) => unknown, delay: number, option?: ThrottleSettings) {
  const throttleFunction = useCallback(throttle(func, delay, option), [func, delay]);

  return throttleFunction;
}
