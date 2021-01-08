const path = require('path');
  
module.exports = {

  entry: './main.ts',

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },

  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist')
  }

};
