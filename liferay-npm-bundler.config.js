const config = require('generator-liferay-fragments').getBundlerConfig();

module.exports = {
  ...config,

  webpack: {
    ...config.webpack,
    module: {
      ...config.webpack.module,
      rules: [
        ...config.webpack.module.rules,
        {
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ],
          test: /\.s[ac]ss$/i,
        }
      ]
    }
  }
};
