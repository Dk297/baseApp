// CustomDateTimePicker.tsx
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import {
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export interface DateTimePickerProps {
  value: Date | null;
  onChange: (date: Date) => void;
  mode?: 'date' | 'time';
  minimumDate?: Date;
  maximumDate?: Date;
  disabled?: boolean;
}

export interface ModalRef {
  open: () => void;
  close: () => void;
}

const CustomDateTimePicker = forwardRef<ModalRef, DateTimePickerProps>(
  (
    { value, onChange, mode = 'date', minimumDate, maximumDate, disabled },
    ref,
  ) => {
    const [show, setShow] = useState(false);
    const [tempDate, setTempDate] = useState<Date>(value || new Date());
    const { t, i18n } = useTranslation();
    const language = i18n.language;

    const open = useCallback(() => setShow(true), []);
    const hide = useCallback(() => setShow(false), []);

    useImperativeHandle(
      ref,
      () => ({
        open,
        close: hide,
      }),
      [open, hide],
    );

    // Cập nhật tempDate khi value thay đổi từ ngoài
    React.useEffect(() => {
      if (value) setTempDate(value);
    }, [value]);

    const handleChange = useCallback(
      (event: DateTimePickerEvent) => {
        if (Platform.OS === 'android') {
          setShow(false);
          if (event.type === 'set' && event.nativeEvent.timestamp) {
            const selectedDate = new Date(event.nativeEvent.timestamp);
            setTempDate(selectedDate);
            onChange(selectedDate);
          }
        } else {
          if (event.nativeEvent.timestamp) {
            setTempDate(new Date(event.nativeEvent.timestamp));
          }
        }
      },
      [onChange],
    );

    const handleIOSConfirm = useCallback(() => {
      onChange(tempDate);
      setShow(false);
    }, [onChange, tempDate]);

    const handleIOSCancel = useCallback(() => {
      setShow(false);
    }, []);

    const renderIOSPicker = () => (
      <Modal transparent visible={show} animationType="fade">
        <TouchableWithoutFeedback onPress={hide}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={handleIOSCancel}>
                    <Text style={[styles.buttonText, styles.confirmButton]}>
                      {t('common:Cancel')}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleIOSConfirm}>
                    <Text style={[styles.buttonText, styles.confirmButton]}>
                      {t('common:accept')}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.pickerWrapper}>
                  <DateTimePicker
                    disabled={disabled}
                    value={tempDate}
                    mode={mode}
                    display="spinner"
                    onChange={handleChange}
                    themeVariant={'light'}
                    style={styles.iOSPicker}
                    minimumDate={minimumDate}
                    maximumDate={maximumDate}
                    locale={language === 'vi' ? 'vi-VN' : 'en-US'}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );

    const renderAndroidPicker = () =>
      show ? (
        <DateTimePicker
          disabled={disabled}
          value={tempDate}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={handleChange}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
        />
      ) : null;

    return Platform.OS === 'ios' ? renderIOSPicker() : renderAndroidPicker();
  },
);

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  buttonText: {
    fontSize: 16,
    color: 'blue',
  },
  confirmButton: {},
  iOSPicker: {
    height: 200,
  },
  pickerWrapper: {
    alignItems: 'center',
  },
});

export default CustomDateTimePicker;
