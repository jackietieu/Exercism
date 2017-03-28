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
    this.wordToMatch = this.originalWord.split('').sort().join('');
  }

  _createClass(Anagram, [{
    key: 'matches',
    value: function matches(possibleAnagrams) {
      var _this = this;

      if (!(possibleAnagrams instanceof Array)) {
        possibleAnagrams = Array.from(arguments);
      }

      var result = [];

      possibleAnagrams.forEach(function (word) {
        if (word.toLowerCase() === _this.originalWord) {
          return;
        } else if (word.toLowerCase().split('').sort().join('') === _this.wordToMatch) {
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