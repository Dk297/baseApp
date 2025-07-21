export const LightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    text: '#000000',
    primary: '#007AFF',
    card: '#F0F0F0',
  },
};

export const DarkTheme = {
  dark: true,
  colors: {
    background: '#FFFFFF',
    text: '#000000',
    primary: '#0A84FF',
    card: '#1C1C1E',
  },
};

export type ThemeType = typeof LightTheme;
