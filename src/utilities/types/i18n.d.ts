import 'react-i18next';
import en from 'src/assets/locales/en';
import vi from 'src/assets/locales/vi';

type DefaultResources = typeof en & typeof vi;

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: DefaultResources;
    };
  }
}
