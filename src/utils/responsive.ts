import { Dimensions, PixelRatio } from 'react-native';

import { MaxContentWidth } from '@/constants/theme';

/**
 * Xiaomi Mi 11: MIUI defaults to FHD+ (1080x2400px) instead of the native
 * WQHD+ panel res, at xxhdpi (density 3.0) -> 360x800dp. Typography is designed
 * against this width so sizes match the Mi 11 mockups.
 * Width is capped at `MaxContentWidth` so wide/web viewports don't inflate text.
 */
export const BASE_WIDTH = 360;

export function getScale(width: number = Dimensions.get('window').width) {
  return Math.min(width, MaxContentWidth) / BASE_WIDTH;
}

export function getFontSize(size: number, width?: number) {
  return PixelRatio.roundToNearestPixel(size * getScale(width));
}
