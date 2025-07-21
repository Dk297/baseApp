// components/Button.tsx
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { Text } from './Text';

type ButtonProps = {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  type?: string;

  // social
  icon?: React.ReactNode;
};

export default function Button({
  title,
  onPress,
  loading = false,
  disabled = false,
  style,
  textStyle = {},
  icon,
  type = 'nomal',
}: ButtonProps) {
  const isDisabled = disabled || loading;

  switch (type) {
    case 'social':
      return (
        <TouchableOpacity style={[styles.socialButton, style]}>
          {icon && icon}
          <Text
            fontSize={16}
            fontWeight={500}
            color={'#313957'}
            style={textStyle}
          >
            {title}
          </Text>
        </TouchableOpacity>
      );

    default:
      return (
        <TouchableOpacity
          onPress={onPress}
          style={[styles.button, isDisabled && styles.disabled, style]}
          activeOpacity={0.8}
          disabled={isDisabled}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={[styles.text, textStyle]}>{title}</Text>
          )}
        </TouchableOpacity>
      );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  socialButton: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F9FA',
    paddingVertical: 8,
    borderRadius: 12,
  },
  disabled: {
    opacity: 0.6,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
