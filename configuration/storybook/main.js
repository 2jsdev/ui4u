const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').default;

const storiesPath = path.resolve(__dirname, '../../packages/**/*.story.@(ts|tsx)').replace(/\\/g, '/')

module.exports = {
  stories: [storiesPath],
  addons: ['storybook-addon-turbo-build', 'storybook-dark-mode'],
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      plugins: [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: ['.ts', '.tsx', '.js'],
          configFile: path.join(__dirname, '../../tsconfig.json'),
        }),
      ],
    };

    config.plugins.pop();

    return config;
  },
};