const path = require('path')

module.exports = {
  externals: {
    vue: 'Vue'
  },
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [{ test: /\.js$|jsx/, use: 'raw-loader' }]
  }
}
