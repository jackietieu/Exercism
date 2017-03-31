'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var bigInt = require('big-integer');

exports['default'] = function () {
  return {
    square: function square(tile) {
      return bigInt(2).pow(tile - 1).toString();
    },
    total: function total() {
      return bigInt(2).pow(64).minus(1).toString();
    }
  };
};

module.exports = exports['default'];