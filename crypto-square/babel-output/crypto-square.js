'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Crypto = (function () {
  function Crypto(str) {
    _classCallCheck(this, Crypto);

    this.input = str;
    this.normalized = this.normalizePlaintext();
    this.cols = this.size();
  }

  _createClass(Crypto, [{
    key: 'normalizePlaintext',
    value: function normalizePlaintext() {
      return this.input.toLowerCase().match(/[\w\d]+/g).join('');
    }

    // dimensions() {
    //   let rows = Math.floor(Math.sqrt(this.normalized.length));
    //   let cols = (rows * rows) === this.normalized.length ? rows : rows + 1;
    //   return [rows, cols];
    // }

  }, {
    key: 'size',
    value: function size() {
      return Math.ceil(Math.sqrt(this.normalized.length));
    }
  }, {
    key: 'plaintextSegments',
    value: function plaintextSegments() {
      var result = [];

      for (var i = 0; i < this.normalized.length; i++) {
        result[Math.floor(i / this.cols)] === undefined ? result[Math.floor(i / this.cols)] = [this.normalized[i]] : result[Math.floor(i / this.cols)].push(this.normalized[i]);
      }

      return result.map(function (el) {
        return el.join('');
      });
    }
  }, {
    key: 'ciphertext',
    value: function ciphertext() {
      var _this = this;

      var result = [];

      this.plaintextSegments().forEach(function (segment) {
        for (var i = 0; i < segment.length; i++) {
          result[i % _this.cols] === undefined ? result[i % _this.cols] = segment[i] : result[i % _this.cols] += segment[i];
        }
      });

      return result.join('');
    }
  }]);

  return Crypto;
})();

exports['default'] = Crypto;
module.exports = exports['default'];