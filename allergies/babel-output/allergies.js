'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var ALLERGIES = {
  1: 'eggs',
  2: 'peanuts',
  4: 'shellfish',
  8: 'strawberries',
  16: 'tomatoes',
  32: 'chocolate',
  64: 'pollen',
  128: 'cats'
};

function allergenValues(max) {
  var values = [1];

  while (values.slice(-1)[0] < max) {
    values.push(Math.pow(2, values.length));
  }

  return values;
}

exports['default'] = function (score) {
  return {
    list: function list() {
      var possibleValues = allergenValues(score),
          result = [];

      if (ALLERGIES[score]) {
        result.push(ALLERGIES[score]);
      } else {
        possibleValues.reverse().forEach(function (value) {
          if (score - value >= 0 && ALLERGIES[value]) {
            score -= value;
            result.push(ALLERGIES[value]);
          }
        });
      }

      return result.reverse();
    },
    allergicTo: function allergicTo(allergen) {
      var allergenList = list();
      return allergenList.includes(allergen);
    }
  };
};

module.exports = exports['default'];