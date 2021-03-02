const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', 'whatwg-fetch', './app/js/script.js'],
  output: {
    path: path.resolve(__dirname, './app/js'),
    filename: 'newMain.js',
  },
};
