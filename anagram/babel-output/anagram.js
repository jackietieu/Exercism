'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Anagram = (function () {
  function Anagram(wordToMatch) {
    _classCallCheck(this, Anagram);

    this.originalWord = wordToMatch.toLowerCase();
    this.originalWordVal = this.stringValue(this.originalWord);
    // this.wordToMatch = this.originalWord.split('').sort().join('');
  }

  _createClass(Anagram, [{
    key: 'stringValue',
    value: function stringValue(str) {
      var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101],
          val = 0;

      str.toLowerCase().split('').forEach(function (char) {
        val += primes[char.charCodeAt(0) - 97];
      });

      return val;
    }
  }, {
    key: 'matches',
    value: function matches(possibleAnagrams) {
      var _this = this;

      if (!(possibleAnagrams instanceof Array)) {
        possibleAnagrams = Array.from(arguments);
      }

      var result = [];

      possibleAnagrams.forEach(function (word) {
        if (_this.originalWord === word.toLowerCase()) {
          return;
        } else if (_this.stringValue(word) === _this.originalWordVal) {
          result.push(word);
        }
      });

      return result;
    }
  }]);

  return Anagram;
})();

exports['default'] = Anagram;
module.exports = exports['default'];