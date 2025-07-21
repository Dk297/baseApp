import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'components/Button';
import InputField from 'components/InputField';
import { Text } from 'components/Text';
import TitleWithDivider from 'components/TextWithDivider';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { LOGO_LOGIN } from 'src/assets/images';
import { SvgIcons } from 'src/assets/svgs';
import { WIDTH } from 'src/contants/sizes';
import { setProfile } from 'src/store/slices/authSlice';
import { IUser, schema } from 'src/utilities/validation/LoginShema';

const defaultValues = {
  username: '0342188558',
  password: 'Hanoi@123',
};

const Login = () => {
  const { t } = useTranslation();

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IUser>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema(t)),
  });

  const dispatch = useDispatch();

  const [username, password] = watch(['username', 'password']);
  const onSubmit = async (data: IUser) => {
    console.log('✅ Dữ liệu hợp lệ:', data);
    dispatch(
      setProfile({
        name: data.username,
        avatar: 'https://i.pravatar.cc/150?img=3',
        token: 'abc123token456',
      }),
    );
  };

  const renderLogo = () => {
    return (
      <View style={styles.frame1}>
        <Image
          source={LOGO_LOGIN}
          style={{
            width: WIDTH - 48,
            height: 180,
            borderRadius: 20,
          }}
        />
      </View>
    );
  };

  const renderForm = () => {
    return (
      <View style={styles.loginForm}>
        <View style={styles.intro}>
          <Text testID="114:21" style={styles.welcomeBack__}>
            {t('login.welcome')}
          </Text>
          <Text
            style={
              styles.todayIsANewDayItsYourDayYouShapeItSignInToStartManagingYourProjects
            }
          >
            {t('login.today')}
          </Text>
        </View>
        <View style={styles.form}>
          <InputField
            style={styles.input}
            label={t('login.username')}
            value={username}
            placeholder="Example@email.com"
            onChangeText={(e: string) => {
              setValue('username', e);
            }}
            error={errors.username?.message}
          />
          <InputField
            secureTextEntry
            secureToggle
            value={password}
            style={styles.input}
            onChangeText={(e: string) => {
              setValue('password', e);
            }}
            label={t('login.password')}
            placeholder={t('placeholder.password')}
            error={errors.password?.message}
          />
          {renderButtonSignin()}
        </View>
        {renderButtonSocial()}
        <Text style={styles.dontYouHaveAnAccountSignUp}>
          {t('login.noAccount')}{' '}
          <Text color="#1E4AE9">{t('login.signup')}</Text>
        </Text>
      </View>
    );
  };

  const renderButtonSignin = () => {
    return (
      <>
        <TouchableOpacity>
          <Text testID="114:26" style={styles.forgotPassword}>
            {t('login.forgotPassword')}
          </Text>
        </TouchableOpacity>

        <Button
          title={t('login.signin')}
          style={styles.mainButton}
          onPress={() => {
            handleSubmit(onSubmit)();
          }}
        />
      </>
    );
  };

  const renderButtonSocial = () => {
    return (
      <View style={styles.spcialLogin}>
        <TitleWithDivider title="Or sign in with" titleColor="#294957" />
        <View testID="114:33" style={styles.socialButtonsColumns}>
          <Button
            icon={<SvgIcons icons="google" />}
            type="social"
            title={t('google')}
            style={styles.socialButton2}
            onPress={() => {}}
          />
          <Button
            type="social"
            title={t('facebook')}
            icon={<SvgIcons icons="facebook" />}
            style={styles.socialButton}
            onPress={() => {}}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      {renderLogo()}
      {renderForm()}

      <Text style={styles.$2023AllRightsReserved}>
        {`© 2023 ALL RIGHTS RESERVED`}
      </Text>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  frame1: {
    paddingLeft: 24,
    paddingBottom: 0,
    paddingRight: 24,
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 10,
    columnGap: 10,
    alignSelf: 'stretch',
  },
  welcomeBack__: {
    alignSelf: 'stretch',
    color: 'Primary.text',
    fontFamily: 'SF Pro Rounded',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0.24,
  },
  todayIsANewDayItsYourDayYouShapeItSignInToStartManagingYourProjects: {
    alignSelf: 'stretch',
    color: 'Secondary.text',
    fontFamily: 'SF Pro Display',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0.15,
  },
  loginForm: {
    paddingTop: 27,
    paddingLeft: 24,
    paddingBottom: 0,
    paddingRight: 24,
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 24,
    alignSelf: 'stretch',
  },
  intro: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 16,
    columnGap: 16,
    alignSelf: 'stretch',
  },
  input: {
    width: '100%',
    alignSelf: 'stretch',
    backgroundColor: '#F3F7FB',
    height: 42,
  },

  forgotPassword: {
    color: '#1E4AE9',
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0.14,
  },
  mainButton: {
    alignSelf: 'stretch',
    backgroundColor: '#162D3A',
    borderRadius: 12,
  },
  form: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 16,
    alignSelf: 'stretch',
  },
  orSignInWith: {
    color: 'rgba(41, 73, 87, 1)',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0.14,
  },
  spcialLogin: {
    paddingTop: 8,
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 16,
    columnGap: 16,
    alignSelf: 'stretch',
  },
  or: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 0,
    paddingBottom: 10,
    paddingRight: 0,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 16,
    columnGap: 16,
    alignSelf: 'stretch',
  },
  socialButton: {
    width: 'unset' as any,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  socialButton2: {
    width: 'unset' as any,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  socialButtonsColumns: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    rowGap: 16,
    columnGap: 16,
    alignSelf: 'stretch',
  },
  dontYouHaveAnAccountSignUp: {
    alignSelf: 'stretch',
    color: 'Link',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0.16,
  },
  $2023AllRightsReserved: {
    width: 390,
    color: 'rgba(149, 156, 182, 1)',
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0.14,
    position: 'absolute',
    bottom: 20,
  },
});
