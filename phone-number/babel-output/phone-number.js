'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PhoneNumber = (function () {
  function PhoneNumber(input) {
    _classCallCheck(this, PhoneNumber);

    this.possibleTelNum = input.replace(/\s/g, '');
  }

  _createClass(PhoneNumber, [{
    key: 'validateChars',
    value: function validateChars() {
      var numbersOnly = this.possibleTelNum.match(/\d+/g).join(''),
          result = null;
      if (numbersOnly.length === 11 && numbersOnly[0] == 1) {
        result = numbersOnly.slice(1);
      } else if (numbersOnly.length === 10) {
        result = numbersOnly;
      }

      return result;
    }
  }, {
    key: 'number',
    value: function number() {
      var result = null;

      if (this.possibleTelNum.match(/[^0-9\-().]/) === null) {
        var numbersOnly = this.possibleTelNum.match(/\d+/g).join('');

        if (numbersOnly.length === 11 && numbersOnly[0] == 1) {
          result = numbersOnly.slice(1);
        } else if (numbersOnly.length === 10) {
          result = numbersOnly;
        }
      }

      return result;
    }
  }]);

  return PhoneNumber;
})();

exports['default'] = PhoneNumber;
module.exports = exports['default'];