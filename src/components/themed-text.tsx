import { useMemo } from 'react';
import { Text, type TextProps, type TextStyle } from 'react-native';

import { ThemeColor, type ThemedTextType, Typography } from '@/constants/theme';
import { useResponsiveFontSize } from '@/hooks/use-responsive-font-size';
import { useTheme } from '@/hooks/use-theme';

export type ThemedTextProps = TextProps & {
  type?: ThemedTextType;
  themeColor?: ThemeColor;
};

export function ThemedText({ style, type = 'body1', themeColor, ...rest }: ThemedTextProps) {
  const theme = useTheme();
  const getFontSize = useResponsiveFontSize();
  const { fontSize, lineHeight, fontWeight } = Typography[type];

  const typeStyle = useMemo<TextStyle>(
    () => ({ fontSize: getFontSize(fontSize), lineHeight: getFontSize(lineHeight), fontWeight }),
    [fontSize, lineHeight, fontWeight, getFontSize],
  );

  return <Text style={[{ color: theme[themeColor ?? 'text'] }, typeStyle, style]} {...rest} />;
}
