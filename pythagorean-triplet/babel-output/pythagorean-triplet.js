"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Triplet = function () {
  function Triplet() {
    _classCallCheck(this, Triplet);

    this.sides = Array.from(arguments).sort();
  }

  _createClass(Triplet, [{
    key: "sum",
    value: function sum() {
      return this.sides.reduce(function (sum, val) {
        return sum + val;
      });
    }
  }, {
    key: "product",
    value: function product() {
      return this.sides.reduce(function (product, val) {
        return product * val;
      });
    }
  }, {
    key: "isPythagorean",
    value: function isPythagorean() {
      return Math.pow(this.sides[0], 2) + Math.pow(this.sides[1], 2) === Math.pow(this.sides[2], 2);
    }
  }]);

  return Triplet;
}();

exports.default = Triplet;