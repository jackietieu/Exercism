'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Pangram = (function () {
  function Pangram(sentence) {
    _classCallCheck(this, Pangram);

    this.sentence = sentence.toLowerCase();
  }

  _createClass(Pangram, [{
    key: 'isPangram',
    value: function isPangram() {
      var lettersHash = {},
          lettersFound = 0,
          z = 'z'.charCodeAt(0);

      for (var i = 0; i < this.sentence.length; i++) {
        var alphabetIdx = z - this.sentence.charCodeAt(i),
            currentChar = this.sentence[i];

        if (alphabetIdx >= 0 && alphabetIdx <= 25 && !lettersHash['' + currentChar]) {
          lettersHash['' + currentChar] = true;
          lettersFound++;
        }

        if (lettersFound === 26) {
          return true;
        }
      }

      return false;
    }
  }]);

  return Pangram;
})();

exports['default'] = Pangram;
module.exports = exports['default'];