'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Transcriptor = (function () {
  function Transcriptor() {
    _classCallCheck(this, Transcriptor);

    this.translations = {
      'A': 'U',
      'G': 'C',
      'T': 'A',
      'C': 'G'
    };
  }

  _createClass(Transcriptor, [{
    key: 'toRna',
    value: function toRna(dna) {
      return dna.split('').map(this.translate.bind(this)).join('');
    }
  }, {
    key: 'translate',
    value: function translate(nucleotide) {
      var translatedToRna = this.translations[nucleotide];
      if (translatedToRna) {
        return translatedToRna;
      } else {
        throw new Error('Invalid input DNA.');
      }
    }
  }]);

  return Transcriptor;
})();

exports['default'] = Transcriptor;
module.exports = exports['default'];