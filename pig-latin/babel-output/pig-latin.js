'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PigLatin = function () {
  function PigLatin() {
    _classCallCheck(this, PigLatin);

    this.cases = {
      'ch': '^ch',
      ' qu': '^[^aeiou]qu',
      'qu': '^[qu]',
      'sch': '^sch',
      'th': '^th[^r]',
      'thr': '^thr',
      ' ': '^[^aeiou][^qhc]'
    };
  }

  _createClass(PigLatin, [{
    key: 'translate',
    value: function translate(phrase) {
      var _this = this;

      return phrase.split(' ').map(function (word) {
        Object.entries(_this.cases).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              charsToSwap = _ref2[0],
              regexp = _ref2[1];

          if (new RegExp('' + regexp).test(word)) {
            word = word.slice(charsToSwap.length).concat(word.slice(0, charsToSwap.length));
          }
        });

        return word + 'ay';
      }).join(' ');
    }
  }]);

  return PigLatin;
}();

exports.default = PigLatin;