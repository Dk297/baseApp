// src/navigations/types.ts
import { NavigatorScreenParams } from '@react-navigation/native';

export type AuthStackParamList = {
  Login: undefined;
  ForgotPassword: { email?: string };
  OTP: { phoneNumber: string };
};

export type MainTabParamList = {
  Home: undefined;
  Utilities: undefined;
  Notifications: { from?: string };
  Profile: { userId?: string };
};

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  MainTabs: NavigatorScreenParams<MainTabParamList>;
};
