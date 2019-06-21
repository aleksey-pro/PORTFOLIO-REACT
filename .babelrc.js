const env = require('./env-config.js');

// Tell to babel to use env variables
module.exports = {
  presets: ['next/babel'],
  plugins: [['transform-define', env]],
};
