import { ReactNode, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FlatList,
  Keyboard,
  Pressable,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import { SvgIcons } from 'src/assets/svgs';
import BottomModal from './BottomModal';
import Divider from './Divider';
import { Text } from './Text';

export type TypeSelect = string | number | (string | number)[];

interface Props {
  value?: TypeSelect;
  onChange?: (value: TypeSelect | undefined) => void;
  onChangeData?: (value: any | undefined) => void;

  option: { value: string | number; label: string }[];
  style?: ViewStyle;
  titleLeft?: string | ReactNode;
  placeholder?: string;
  disabled?: boolean;
  mode?: 'single' | 'multiple';
  allowClear?: boolean;
  showSearch?: boolean;
  loading?: boolean;
  onSearchTextChange?: (text: string) => void;
  height?: number;
}

const Select = ({
  value,
  onChange,
  option,
  style,
  titleLeft,
  placeholder,
  disabled,
  mode = 'single',
  allowClear = false,
  showSearch = false,
  loading = false,
  height = 50,
  onChangeData,
  onSearchTextChange,
}: Props) => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  // Nếu mode là 'multiple', quản lý giá trị dưới dạng mảng
  const [selectedValues, setSelectedValues] = useState<(string | number)[]>(
    mode === 'multiple' && Array.isArray(value) ? value : [],
  );

  // Đồng bộ giá trị từ props
  useEffect(() => {
    if (mode === 'multiple' && Array.isArray(value)) {
      setSelectedValues(value);
    }
  }, [value, mode]);

  const handleSelect = (data: string | number) => {
    if (mode === 'single') {
      if (onChange) onChange(data);
      setShowModal(false);
    } else {
      const newSelectedValues = selectedValues.includes(data)
        ? selectedValues.filter(item => item !== data)
        : [...selectedValues, data];
      setSelectedValues(newSelectedValues);
      if (onChange) onChange(newSelectedValues);
    }
  };

  const handleClear = () => {
    if (mode === 'single') {
      if (onChange) onChange(undefined);
    } else {
      setSelectedValues([]);
      if (onChange) onChange([]);
    }
  };

  const renderLabel = () => {
    if (mode === 'single') {
      if (loading) {
        return t('common:get_data');
      }
      const selectedOption = option?.find(item => item.value === value);
      return selectedOption
        ? selectedOption.label
        : placeholder || t('common:select');
    }

    if (mode === 'multiple') {
      if (loading) {
        return t('common:get_data');
      }

      if (selectedValues.length === 0) return placeholder || t('common:select');
      return selectedValues
        .map(val => option.find(item => item.value === val)?.label || '')
        .join(', ');
    }
  };

  //region search
  const [searchText, setSearchText] = useState<string>('');
  const [filteredOptions, setFilteredOptions] =
    useState<{ value: string | number; label: string }[]>(option);

  useEffect(() => {
    if (searchText.trim() === '') {
      setFilteredOptions(option);
    } else {
      const lowerSearch = searchText.toLowerCase();
      setFilteredOptions(
        option.filter(item => item.label.toLowerCase().includes(lowerSearch)),
      );
    }
  }, [searchText, option]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearchTextChange?.(searchText);
    }, 300); // debounce 300ms

    return () => clearTimeout(timeout);
  }, [searchText, onSearchTextChange]);

  const isSelected = (data: string | number) =>
    mode === 'multiple' ? selectedValues.includes(data) : value === data;

  const renderModal = () => {
    return (
      <BottomModal visible={showModal} onClose={() => setShowModal(false)}>
        <View style={styles.modalContent}>
          {showSearch && (
            <View style={styles.searchContainer}>
              <TextInput
                autoCapitalize="none"
                placeholder={`${t('common:Search')}...`}
                value={searchText}
                onChangeText={setSearchText}
                style={styles.searchInput}
              />
              <Divider style={styles.searchDivider} />
            </View>
          )}

          <FlatList
            contentContainerStyle={{
              flexGrow: 1,
            }}
            data={filteredOptions}
            nestedScrollEnabled
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <SvgIcons icons="empty" width={40} height={40} />
                <Text>Trống</Text>
              </View>
            }
            keyExtractor={item => String(item.value)}
            renderItem={({ item }) => {
              return (
                <Pressable
                  style={styles.optionPressable}
                  key={item.value}
                  onPress={() => {
                    if (onChangeData) {
                      onChangeData(item);
                    }
                    handleSelect(item.value);
                  }}
                >
                  <View
                    style={[styles.optionRow, mode === 'single' ? null : null]}
                  >
                    {mode === 'multiple' && (
                      <SvgIcons
                        icons={isSelected(item.value) ? 'check' : 'clear'}
                        width={16}
                        height={16}
                      />
                    )}
                    <Text
                      fontSize={14}
                      fontWeight={'500'}
                      color={isSelected(item.value) ? 'blue' : '#000'}
                    >
                      {item.label}
                    </Text>
                  </View>
                  <Divider style={styles.optionDivider} />
                </Pressable>
              );
            }}
          />
        </View>
      </BottomModal>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={[
          styles.container,
          disabled ? styles.containerDisabled : styles.containerEnabled,
          mode === 'multiple' ? styles.containerMultiple : { height },
          style,
        ]}
      >
        <TouchableOpacity
          disabled={disabled || loading}
          style={[
            styles.touchable,
            titleLeft ? styles.touchableWithTitle : null,
          ]}
          onPress={() => {
            setShowModal(true);
          }}
        >
          {typeof titleLeft === 'string' ? <Text>{titleLeft}</Text> : titleLeft}

          <View style={styles.rowBetween}>
            <View style={styles.flex1}>
              <Text numberOfLines={mode === 'multiple' ? 4 : 1}>
                {renderLabel()}
              </Text>
            </View>
            <View style={styles.iconRow}>
              {allowClear &&
                (value || selectedValues.length > 0) &&
                !disabled && (
                  <Pressable
                    hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
                    onPress={handleClear}
                    style={styles.clearIcon}
                  >
                    <SvgIcons icons="clear" />
                  </Pressable>
                )}
              {!disabled && (
                <SvgIcons
                  icons={showModal ? 'angle_down' : 'angle_right'}
                  width={16}
                  height={16}
                />
              )}
            </View>
          </View>
        </TouchableOpacity>
        {renderModal()}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Select;

const styles = StyleSheet.create({
  container: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#CECECE',
    minHeight: 50,
    justifyContent: 'center',
  },
  containerDisabled: {
    backgroundColor: 'gray',
  },
  containerEnabled: {
    backgroundColor: 'white',
  },
  containerMultiple: {
    height: 'auto',
  },
  touchable: {
    width: '100%',
  },
  touchableWithTitle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flex1: {
    flex: 1,
  },
  iconRow: {
    flexShrink: 0,
    flexDirection: 'row',
  },
  clearIcon: {
    marginLeft: 8,
  },
  modalContent: {
    maxHeight: 700,
    paddingHorizontal: 16,
  },
  searchContainer: {
    marginBottom: 12,
  },
  searchInput: {
    borderRadius: 8,
    borderWidth: 0.5,
    height: 36,
    borderColor: '#CECECE',
    paddingHorizontal: 16,
  },
  searchDivider: {
    marginTop: 8,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionPressable: {
    marginBottom: 8,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    gap: 6,
  },
  optionDivider: {
    marginTop: 8,
  },
});
