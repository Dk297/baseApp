import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Divider from './Divider';
import { Text } from './Text';

interface Props {
  title: string;
  titleColor?: string;
  style?: ViewStyle;
  titleStyle?: ViewStyle;
  spacing?: number;
}

const TitleWithDivider: React.FC<Props> = ({
  title,
  titleColor = '#000000',
  spacing = 8,
  style,
  titleStyle = {},
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.flex1}>
        <Divider />
      </View>
      <Text
        fontSize={14}
        fontWeight={'500'}
        color={titleColor}
        style={[styles.title, { marginHorizontal: spacing }, titleStyle]}
      >
        {title}
      </Text>
      <View style={styles.flex1}>
        <Divider />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  divider: {},
  title: {
    textAlign: 'center',
  },
});

export default TitleWithDivider;
