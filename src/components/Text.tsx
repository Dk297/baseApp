import React from 'react';

import { Platform, TextProps, TextStyle, Text as RNText } from 'react-native';

const getFont: (weight: TextStyle['fontWeight']) => string = weight => {
  if (Platform.OS === 'android') {
    switch (weight) {
      case '100':
        return 'Gilroy-Thin';
      case '200':
        return 'Gilroy-Ultralight';
      case '300':
        return 'Gilroy-Light';
      case 'normal':
      case '400':
      case '500':
        return 'Gilroy-Regular';
      case '600':
        return 'Gilroy-Semibold';
      case '800':
        return 'Gilroy-Extrabold';
      case '900':
        return 'Gilroy-Black';
      case '700':
      case 'bold':
        return 'Gilroy-Bold';
      default:
        return 'Gilroy-Medium';
    }
  }
  return 'Gilroy';
};

/**
 * custom lai text
 * add font family
 */

// Type definitions
interface CustomTextProps extends TextProps {
  children: React.ReactNode;
  color?: string;
  fontSize?: number;
  fontWeight?: TextStyle['fontWeight'];
  style?: TextStyle | TextStyle[];
}

export const Text: React.FC<CustomTextProps> = ({
  children,
  color = '#000000',
  fontSize = 16,
  fontWeight = '400',
  style,
  ...props
}) => {
  const textStyle: TextStyle[] = [
    {
      fontFamily: getFont(fontWeight),
      color,
      fontSize,
      fontWeight,
      lineHeight: fontSize + 4,
    },
    style as TextStyle,
  ];
  return (
    <RNText style={textStyle} {...props}>
      {children}
    </RNText>
  );
};
