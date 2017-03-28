'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Anagram = (function () {
  function Anagram(wordToMatch) {
    _classCallCheck(this, Anagram);

    this.wordToMatch = wordToMatch.toLowerCase();
    this.countHash = this.countHashConverter();
  }

  _createClass(Anagram, [{
    key: 'countHashConverter',
    value: function countHashConverter() {
      var countHash = {};

      this.wordToMatch.split('').forEach(function (char) {
        countHash['' + char] ? countHash['' + char]++ : countHash['' + char] = 1;
      });

      return countHash;
    }
  }, {
    key: 'checkObjEquality',
    value: function checkObjEquality(obj1, obj2) {
      if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
      }

      for (var i in obj1) {
        if (!obj2.hasOwnProperty(i) || obj1[i] !== obj2[i]) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: 'matches',
    value: function matches(possibleAnagrams) {
      var _this = this;

      if (!(possibleAnagrams instanceof Array)) {
        possibleAnagrams = Array.from(arguments);
      }

      var result = [];

      possibleAnagrams.forEach(function (possibleMatch) {
        if (possibleMatch.toLowerCase() === _this.wordToMatch) {
          return;
        }

        var countHashCopy = {};

        for (var i = 0; i < possibleMatch.length; i++) {
          var lowerCaseChar = possibleMatch[i].toLowerCase();
          countHashCopy[lowerCaseChar] ? countHashCopy[lowerCaseChar]++ : countHashCopy[lowerCaseChar] = 1;
        }

        if (_this.checkObjEquality(_this.countHash, countHashCopy)) {
          result.push(possibleMatch);
        }
      });

      return result;
    }
  }]);

  return Anagram;
})();

exports['default'] = Anagram;
module.exports = exports['default'];