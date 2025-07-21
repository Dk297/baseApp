// src/navigations/screenNames.ts
export const RootStackScreens = {
  AuthStack: 'AuthStack',
  MainTabs: 'MainTabs',
} as const;

export const AuthStackScreens = {
  Login: 'Login',
  ForgotPassword: 'ForgotPassword',
  OTP: 'OTP',
} as const;

export const MainTabScreens = {
  Home: 'Home',
  Utilities: 'Utilities',
  Notifications: 'Notifications',
  Profile: 'Profile',
  MainTabs: 'MainTabs',
} as const;
