'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ALPHA = 'abcdefghijklmnopqrstuvwxyz',
    keyGen = function keyGen() {
  return Array.from({ length: 100 }).map(function (el) {
    return ALPHA[Math.floor(Math.random() * ALPHA.length)];
  }).join('');
},
    code = function code(str, key, encode) {
  return str.split('').map(function (letter, i) {
    var shift = ALPHA.indexOf(key[i]) * (encode ? 1 : -1);
    return ALPHA[(ALPHA.indexOf(letter) + shift + ALPHA.length) % ALPHA.length];
  }).join('');
};

exports.default = function (inputKey) {
  if (inputKey === '' || inputKey && inputKey.match(/[^a-z]/)) throw new Error('Bad key');

  var key = inputKey || keyGen();

  return {
    key: key,
    encode: function encode(str) {
      return code(str, key, true);
    },
    decode: function decode(str) {
      return code(str, key, false);
    }
  };
};