const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
    reactApp:  ['react-hot-loader/patch', './src/react_test'],
    // dynamicImport: ['babel-polyfill', ENTRY + 'dynamicImport.js']
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devServer: {
    contentBase: './dist',
    publicPath: "/",
    hotOnly: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
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
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
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