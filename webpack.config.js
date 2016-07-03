const webpack = require('webpack');

const config = {
  entry: './src/',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'public',
    historyApiFallback: {
      index: '/index.html'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
        d3: 'd3',
        $: 'jquery',
        jQuery: 'jquery'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader:"url?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file" }
    ]
  }
};

module.exports = config;
