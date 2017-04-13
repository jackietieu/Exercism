"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (input) {
  var num = input.match(/\d/g),
      doubled = num.reverse().map(function (digit, i) {
    return (i - 1) % 2 === 0 ? +((digit * 2 >= 10 ? digit * 2 - 9 : digit * 2) % 10) : +digit;
  }),
      valid = input.length === 1 || input.match(/[^\d\s]/) ? false : !(doubled.reduce(function (sum, val) {
    return sum + val;
  }) % 10);

  return { valid: valid };
};