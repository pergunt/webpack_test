const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

/*
  entry: () => {
    if (process.env.APP === 'react') {
      return ['react-hot-loader/patch', './src/react_test'];
    }
    return './src/index.js';
  },
 */

const ENTRY = './src/';

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    // app:  './src/index.js',
    reactApp: ['react-hot-loader/patch', './src/react_test'],
    // dynamicImport: ['babel-polyfill', ENTRY + 'dynamicImport.js']
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  devServer: {
    contentBase: './dist',
    publicPath: "/",
    historyApiFallback: true,
    hotOnly: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Caching',
      template: './src/template.html',
      favicon: './src/images/instagram.svg'
    }),
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env"]
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
};
