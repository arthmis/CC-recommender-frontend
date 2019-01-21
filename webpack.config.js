var path = require('path');

module.exports = {
  entry: './js/results_page.jsx',
  output: {
    filename: 'webpack_results_page.js',
    path: path.resolve(__dirname, 'js')
  },
  module: {
   rules: [
     {test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader'}
   ]
  }
};
