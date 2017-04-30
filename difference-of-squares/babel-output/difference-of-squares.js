"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Squares = function Squares(max) {
  _classCallCheck(this, Squares);

  this.range = Array.from(Array(max), function (_, i) {
    return i + 1;
  });
  this.squareOfSums = Math.pow(this.range.reduce(function (acc, val) {
    return acc + val;
  }), 2);
  this.sumOfSquares = this.range.map(function (val) {
    return Math.pow(val, 2);
  }).reduce(function (acc, val) {
    return acc + val;
  });
  this.difference = this.squareOfSums - this.sumOfSquares;
};

exports.default = Squares;