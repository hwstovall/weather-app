module.exports = ({config, mode}) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
  });
  config.devtool = 'eval-source-map';
  config.module.rules.push({
    test: /\.s?css$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        },
      },
      {
        loader: 'postcss-loader'
      },
      {
        loader: 'sass-loader',
      },
    ],
  });
  config.resolve.extensions.push('.js', '.ts', '.tsx', '.scss', '.css');

  return config;
};
