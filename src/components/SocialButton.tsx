import { StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { Text } from './Text';

interface Props {
  icon?: React.ReactNode;
  label?: string;
  style?: ViewStyle;
}

const SocialButton = (props: Props) => {
  const { icon, label, style } = props;
  return (
    <View style={[styles.container, style]}>
      {icon}
      <Text fontSize={16} fontWeight={500} color={'#313957'}>
        {label}
      </Text>
    </View>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F9FA',
  },
});
