import throttle from 'lodash/throttle';
import { useCallback } from 'react';

export default function useThrottle(func: (...args: unknown[]) => unknown, delay: number) {
  const throttleFunction = useCallback(throttle(func, delay), [func, delay]);

  return throttleFunction;
}
