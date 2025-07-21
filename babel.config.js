module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        root: ['./src'],
        alias: {
          // This needs to be mirrored in tsconfig.json
          components: './src/components',
          src: './src',
        },
      },
    ],
    'jest-hoist',
    'react-native-reanimated/plugin',
  ],
};
