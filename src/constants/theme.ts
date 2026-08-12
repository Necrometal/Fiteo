import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    primaire: '#87F1FF',
    secondary: '#1D3461',
    accent: '#BA324F',
    backgroundLight: '#F5F3FF',
    backgroundDark: '#000000',
    text: '#1E1B4B',
    textSecondary: '#1D3461',
  },
  dark: {
    primaire: '#87F1FF',
    secondary: '#1D3461',
    accent: '#BA324F',
    backgroundLight: '#000000',
    backgroundDark: '#0F172A',
    text: '#F8FAFC',
    textSecondary: '#94A3B8',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
