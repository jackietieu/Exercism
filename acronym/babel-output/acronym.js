'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  parse: function parse(str) {
    return str.match(/[a-zA-Z][a-z]+|[A-Z]+/g).map(function (word) {
      return word[0].toUpperCase();
    }).join('');
  }
};
module.exports = exports['default'];