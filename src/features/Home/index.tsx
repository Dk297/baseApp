import Header from 'components/Header';
import SelectData from 'components/SelectData';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const [testShiftId, setTestingShiftId] = useState(undefined);

  const items = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
  }));

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header title="Trang chủ" titleAlign="center" />
      <SelectData
        label="Trạng thái"
        disabled={false}
        value={testShiftId}
        onChange={value => {
          setTestingShiftId(value as any);
        }}
        data={items}
        placeholder={'Chọn'}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
