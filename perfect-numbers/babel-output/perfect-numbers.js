'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PerfectNumbers = (function () {
  function PerfectNumbers() {
    _classCallCheck(this, PerfectNumbers);
  }

  _createClass(PerfectNumbers, [{
    key: 'classify',
    value: function classify(num) {
      if (num <= 0) {
        return 'Classification is only possible for natural numbers.';
      }

      var aliquotSum = this.sumFactors(num),
          classification = 'perfect';

      if (aliquotSum < num || num === 1) {
        classification = 'deficient';
      } else if (aliquotSum > num) {
        classification = 'abundant';
      }

      return classification;
    }
  }, {
    key: 'sumFactors',
    value: function sumFactors(num) {
      var lastPossibleFactor = num / 2,
          factors = [1];
      for (var i = 2; i <= lastPossibleFactor; i++) {
        if (num % i === 0) {
          factors.push(i);
        }
      }

      return factors.reduce(function (a, b) {
        return a + b;
      });
    }
  }]);

  return PerfectNumbers;
})();

exports['default'] = PerfectNumbers;
module.exports = exports['default'];