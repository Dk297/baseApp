import { View } from 'react-native';
import Select, { TypeSelect } from './Select';
import { Text } from './Text';

interface Props {
  onChange?: (value: TypeSelect | undefined) => void;
  value?: string;
  disabled?: boolean;
  allowClear?: boolean;
  placeholder?: string;
  data: any;
  label?: string;
  mode?: 'single' | 'multiple';
}

const SelectData = ({
  value,
  onChange,
  disabled,
  data,
  placeholder,
  label,
  mode = 'single',
}: Props) => {
  return (
    <View style={{ gap: 6 }}>
      <Text fontSize={16} fontWeight={'600'}>
        {label}
      </Text>
      <Select
        showSearch
        disabled={disabled}
        value={value}
        onChange={onChange}
        option={data?.map((val: any) => ({
          value: val?.id,
          label: val?.name,
        }))}
        placeholder={placeholder}
        mode={mode}
      />
    </View>
  );
};

export default SelectData;
