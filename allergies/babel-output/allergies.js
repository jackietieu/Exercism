'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var ALLERGENS = ['cats', 'pollen', 'chocolate', 'tomatoes', 'strawberries', 'shellfish', 'peanuts', 'eggs'];

exports['default'] = function (score) {
  var _this = this;

  this.score = score % 256;
  this.list = function () {
    return ALLERGENS.filter(function (allergen, i) {
      var currentScore = Math.pow(2, 7 - i);
      if (_this.score === currentScore || currentScore < _this.score) {
        _this.score -= Math.pow(2, 7 - i);
        return true;
      } else {
        return false;
      }
    }).reverse();
  };
  this.allergicTo = function (allergen) {
    return _this.list().includes(allergen);
  };
};

module.exports = exports['default'];