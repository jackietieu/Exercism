'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Song = (function () {
  function Song() {
    _classCallCheck(this, Song);

    this.animals = ['', 'fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse'];
    this.lyrics = ['I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n', 'I know an old lady who swallowed a fly.\n', 'I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n', 'I know an old lady who swallowed a bird.\nHow absurd to swallow a bird!\n', 'I know an old lady who swallowed a cat.\nImagine that, to swallow a cat!\n', 'I know an old lady who swallowed a dog.\nWhat a hog, to swallow a dog!\n', 'I know an old lady who swallowed a goat.\nJust opened her throat and swallowed a goat!\n', 'I know an old lady who swallowed a cow.\nI don\'t know how she swallowed a cow!\n', 'I know an old lady who swallowed a horse.\nShe\'s dead, of course!\n'];
  }

  _createClass(Song, [{
    key: 'animalCatcher',
    value: function animalCatcher(verseNum) {
      var result = [];

      for (var i = 2; i <= verseNum; i++) {
        var animal = this.animals[i],
            animalToCatch = this.animals[i - 1] === 'spider' ? 'spider that wriggled and jiggled and tickled inside her' : this.animals[i - 1];
        result.unshift('She swallowed the ' + animal + ' to catch the ' + animalToCatch + '.\n');
      }

      return result.join('');
    }
  }, {
    key: 'verse',
    value: function verse(verseNum) {
      if (verseNum === 8) {
        return this.lyrics[verseNum];
      }
      var result = [];

      result.unshift(this.lyrics[0]);
      if (verseNum > 1) {
        result.unshift(this.animalCatcher(verseNum));
      }
      result.unshift(this.lyrics[verseNum]);

      return result.join('');
    }
  }, {
    key: 'verses',
    value: function verses(start, end) {
      var result = [];

      for (var i = start; i <= end; i++) {
        result.push(this.verse(i));
      }

      return result.join('\n') + '\n';
    }
  }]);

  return Song;
})();

exports['default'] = Song;
module.exports = exports['default'];