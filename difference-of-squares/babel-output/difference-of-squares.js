"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Squares = function Squares(max) {
  _classCallCheck(this, Squares);

  this.range = Array.from(Array(max), function (_, i) {
    return i;
  });
  this.squareOfSums = this.range.reduce(function (acc, val) {
    return acc + val * val;
  });
  this.sumOfSquares = this.range.map(function (val) {
    return val * val;
  }).reduce(function (acc, val) {
    return acc + val;
  });
  this.difference = this.sumOfSquares - this.squareOfSums;
};

exports.default = Squares;