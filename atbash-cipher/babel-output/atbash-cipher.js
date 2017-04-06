'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

exports['default'] = {
  encode: function encode(str) {
    str = str.toLowerCase().match(/[\w\d]+/g).join('').split('');
    return str.map(function (char, i) {
      return (i % 5 === 0 && i > 0 ? ' ' : '') + (ALPHABET[25 - ALPHABET.indexOf(char)] || char);
    }).join('');
  }
};
module.exports = exports['default'];