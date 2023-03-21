
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-paper/babel',
    'nativewind/babel',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          components: './src/components',
          assets: './assets',
          screens: './src/screens',
          config: './src/config',
          navigations: './src/navigations',
          utils: './src/utils',
          actions: './src/state/actions',
          constants: './src/state/constants',
          contexts: './src/state/contexts',
          reducers: './src/state/reducers',
          assets: './src/assets/',
          hooks: './src/hooks',
          data: './src/data',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
