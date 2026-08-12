import { useCallback } from 'react';
import { useWindowDimensions } from 'react-native';

import { getFontSize } from '@/utils/responsive';

/**
 * Reactive version of `getFontSize` — recomputes on rotation / window resize
 * via `useWindowDimensions`, unlike the static `Dimensions.get` snapshot.
 */
export function useResponsiveFontSize() {
  const { width } = useWindowDimensions();

  return useCallback((size: number) => getFontSize(size, width), [width]);
}
