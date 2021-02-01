const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Needs to be version 5.0.0-alpha.6 to prevent deprecation warning

const isDev = process.env.NODE_ENV === 'development';
const hashType = isDev ? 'hash' : 'chunkhash';

const generalPlugins = [
  new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
];

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: `[name].bundle.[${hashType}].js`,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },

  plugins: [...generalPlugins],
};
