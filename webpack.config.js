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

      {
        test: /\.css?$/,
        loader: "style!css!"
      },
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};

module.exports = config;
