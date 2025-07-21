import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import { SvgIcons } from 'src/assets/svgs';
import { useNavigation } from '@react-navigation/native';

type HeaderProps = {
  showBack?: boolean;
  title?: string;
  titleAlign?: 'center' | 'left';
  renderRight?: React.ReactNode;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
};

const Header: React.FC<HeaderProps> = ({
  showBack = false,
  title = '',
  titleAlign = 'center',
  renderRight,
  containerStyle,
  titleStyle,
}) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={[styles.container, containerStyle]}>
      {/* Back Button */}
      {showBack ? (
        <TouchableOpacity onPress={goBack} style={styles.left}>
          {/* Bạn có thể thay thế icon này bằng icon của bạn */}
          <SvgIcons icons="arrow_right" />
        </TouchableOpacity>
      ) : (
        <View style={styles.left} />
      )}

      {/* Title */}
      <View
        style={[
          styles.titleContainer,
          titleAlign === 'center' && styles.titleCenter,
        ]}
      >
        <Text style={[styles.title, titleStyle]} numberOfLines={1}>
          {title}
        </Text>
      </View>

      {/* Right Action */}
      <View style={styles.right}>{renderRight}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  left: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  backText: {
    fontSize: 24,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  titleCenter: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  right: {
    width: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
