// entry --> output (basic setup to get it to bundle and work)
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  // loader (for Babel and SCSS)
  module: {
    rules: [{
      loader: 'babel-loader', // pick a loader to run
      test: /\.js$/, // following .js files for babel
      exclude: /node_modules/ // we don't want to run babel here
    }, {
      // setting up CSS inside of webpack (yarn add css-loader, style-loader)
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  // source maps for bug fixing
  devtool: 'cheap-module-eval-source-map',
  // webpack dev server config
  devServer: {
    contentBase: path.join(__dirname, 'public'), 
    historyApiFallback: true // for routing client side code (to always route index.html)
  }
};



