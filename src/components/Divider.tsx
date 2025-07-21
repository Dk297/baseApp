import * as React from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

export type Props = ViewProps & {
  /**
   * @renamed Renamed from 'inset' to 'leftInset` in v5.x
   * Whether divider has a left inset.
   */
  leftInset?: boolean;
  /**
   * @supported Available in v5.x with theme version 3
   *  Whether divider has a horizontal inset on both sides.
   */
  horizontalInset?: boolean;
  /**
   * @supported Available in v5.x with theme version 3
   *  Whether divider should be bolded.
   */
  bold?: boolean;
  style?: StyleProp<ViewStyle>;
};

/**
 * A divider is a thin, lightweight separator that groups content in lists and page layouts.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Divider, Text } from '@component';
 *
 * const MyComponent = () => (
 *   <View>
 *     <Text>Lemon</Text>
 *     <Divider />
 *     <Text>Mango</Text>
 *     <Divider />
 *   </View>
 * );
 *
 * export default MyComponent;
 * ```
 */
const Divider = ({
  leftInset,
  horizontalInset = false,
  style,
  bold = false,
  ...rest
}: Props) => {
  const dividerColor = '#CFDFE2';

  return (
    <View
      {...rest}
      style={[
        { height: StyleSheet.hairlineWidth, backgroundColor: dividerColor },
        leftInset && styles.v3LeftInset,
        horizontalInset && styles.horizontalInset,
        bold && styles.bold,
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  leftInset: {
    marginLeft: 72,
  },
  v3LeftInset: {
    marginLeft: 16,
  },
  horizontalInset: {
    marginLeft: 16,
    marginRight: 16,
  },
  bold: {
    height: 1,
  },
});

export default Divider;
