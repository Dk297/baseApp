import React from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

interface BottomModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BottomModal: React.FC<BottomModalProps> = ({
  visible,
  onClose,
  children,
}) => {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      style={styles.modal}
      onSwipeComplete={onClose}
      backdropOpacity={0.4}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      useNativeDriver
      hideModalContentWhileAnimating
      propagateSwipe
      statusBarTranslucent={true}
    >
      <View style={styles.container}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    // ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    margin: 0,
    // backgroundColor: 'blue',
    height: '100%',
    minHeight: 200,
  },
  container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: 24,
    paddingTop: 16,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
    minHeight: 200,
  },
});

export default BottomModal;
