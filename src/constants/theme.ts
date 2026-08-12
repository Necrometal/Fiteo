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
    textSecondary: '#94A3B8'
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;