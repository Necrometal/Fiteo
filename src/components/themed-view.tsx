import { View, type ViewProps } from 'react-native';

import { ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type ThemedViewProps = ViewProps & {
  themeColor?: ThemeColor;
};

export function ThemedView({ style, themeColor, ...otherProps }: ThemedViewProps) {
  const theme = useTheme();

  return (
    <View
      style={[{ backgroundColor: theme[themeColor ?? 'backgroundLight'] }, style]}
      {...otherProps}
    />
  );
}
