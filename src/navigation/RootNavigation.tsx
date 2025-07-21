// src/navigations/RootNavigation.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { RootStackScreens } from './screenNames';
import { RootStackParamList } from './types';

import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import { AuthStack } from './AuthStack';
import MainTab from './MainTab';
import { refNavigation } from './navigationHelper';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <NavigationContainer ref={refNavigation}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {token ? (
          <Stack.Screen name={RootStackScreens.MainTabs} component={MainTab} />
        ) : (
          <Stack.Screen
            name={RootStackScreens.AuthStack}
            component={AuthStack}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
