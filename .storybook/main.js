const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y'],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    // Merge our rule with existing assetLoader rules
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: { titleProp: true },
        },
        'url-loader',
      ],
    });

    config.resolve.alias['@'] = path.resolve(__dirname, '../src');

    return config;
  },
};
