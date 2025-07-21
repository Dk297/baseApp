import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyTabBar } from 'components/CustomBottomTab';
import React from 'react';
import { ICON_HOME_FILLER, ICON_RING, ICON_SETTING } from 'src/assets/images';
import Home from 'src/features/Home';
import Notification from 'src/features/Notification';
import Profile from 'src/features/Profile';
import { MainTabScreens } from './screenNames';
import { MainTabParamList } from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();
export const sizeIcon = 24;

const renderTabBar = (props: any) => <MyTabBar {...props} />;

const BottomTab: React.FC<any> = () => {
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      initialRouteName={MainTabScreens.Home}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={MainTabScreens.Home}
        component={Home}
        options={{
          tabBarIcon: ICON_HOME_FILLER,
        }}
      />
      <Tab.Screen
        name={MainTabScreens.Notifications}
        component={Notification}
        options={{
          tabBarIcon: ICON_RING,
        }}
      />
      <Tab.Screen
        name={MainTabScreens.Profile}
        component={Profile}
        options={{
          tabBarIcon: ICON_SETTING,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
