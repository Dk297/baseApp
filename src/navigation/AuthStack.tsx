import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from './types';
import { AuthStackScreens } from './screenNames';
import Login from 'src/features/Auth/Login';
import ForgotPassword from 'src/features/Auth/ForgotPassword';
import OtpScreen from 'src/features/Auth/Otp';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName={AuthStackScreens.Login}
  >
    <Stack.Screen name={AuthStackScreens.Login} component={Login} />
    <Stack.Screen
      name={AuthStackScreens.ForgotPassword}
      component={ForgotPassword}
    />
    <Stack.Screen name={AuthStackScreens.OTP} component={OtpScreen} />
  </Stack.Navigator>
);
