import { useMemo } from 'react';
import { Text, type TextProps, type TextStyle } from 'react-native';

import { ThemeColor } from '@/constants/theme';
import { useResponsiveFontSize } from '@/hooks/use-responsive-font-size';
import { useTheme } from '@/hooks/use-theme';

export type ThemedTextType =
  'headline' | 'subtitle1' | 'subtitle2' | 'subtitle3' | 'body1' | 'body2' | 'body3' | 'caption';

export type ThemedTextProps = TextProps & {
  type?: ThemedTextType;
  themeColor?: ThemeColor;
};

export function ThemedText({ style, type = 'body1', themeColor, ...rest }: ThemedTextProps) {
  const theme = useTheme();
  const getFontSize = useResponsiveFontSize();

  const typeStyle = useMemo<TextStyle>(() => {
    switch (type) {
      case 'headline':
        return { fontSize: getFontSize(24), lineHeight: getFontSize(32), fontWeight: 700 };
      case 'subtitle1':
        return { fontSize: getFontSize(16), lineHeight: getFontSize(16), fontWeight: 700 };
      case 'subtitle2':
        return { fontSize: getFontSize(14), lineHeight: getFontSize(16), fontWeight: 700 };
      case 'subtitle3':
        return { fontSize: getFontSize(12), lineHeight: getFontSize(16), fontWeight: 700 };
      case 'body1':
        return { fontSize: getFontSize(16), lineHeight: getFontSize(16), fontWeight: 400 };
      case 'body2':
        return { fontSize: getFontSize(14), lineHeight: getFontSize(16), fontWeight: 400 };
      case 'body3':
        return { fontSize: getFontSize(12), lineHeight: getFontSize(16), fontWeight: 400 };
      case 'caption':
        return { fontSize: getFontSize(10), lineHeight: getFontSize(12), fontWeight: 400 };
    }
  }, [type, getFontSize]);

  return <Text style={[{ color: theme[themeColor ?? 'text'] }, typeStyle, style]} {...rest} />;
}
