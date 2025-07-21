// metro.config.js
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// ⚠️ Thêm các asset nếu cần load ảnh, font
defaultConfig.resolver.assetExts = [
  ...defaultConfig.resolver.assetExts,
  'bin',
  'png',
  'jpg',
  'jpeg',
  'gif',
  'svg',
];

const config = {};

const merged = mergeConfig(defaultConfig, config);
module.exports = wrapWithReanimatedMetroConfig(merged);
