import * as path from 'path'
import * as express from 'express';
import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';

import HtmlWebpackPlugin from 'html-webpack-plugin';

const release = 'development-' + new Date().toISOString();

const config: webpack.Configuration = {
  mode: 'development',
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss', '.css'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devtool: 'eval',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: 'weather.local',
    port: 9000,
    publicPath: '/',
    historyApiFallback: true,
    hot: true,
    before: (app) => {
       app.use('/assets', express.static('./assets'));
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 1, sourceMap: true },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|ico|gif)$/,
          use: [
            'file-loader',
          ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
  ],
};

module.exports = config;
