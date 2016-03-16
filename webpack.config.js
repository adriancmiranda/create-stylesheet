var webpack = require('webpack');
var fileName = require('./package').name;
var plugins = [];

if (process.env.MINIFY) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
  fileName += '.min';
}

module.exports = {
  entry: './index.js',
  output: {
    filename: 'dist/' + fileName + '.js',
    library: 'createStyleSheet',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
