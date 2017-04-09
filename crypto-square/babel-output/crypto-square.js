'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Crypto = (function () {
  function Crypto(str) {
    var _this = this;

    _classCallCheck(this, Crypto);

    this.input = str;
    this.size = function () {
      return _this.dimensions()[1];
    };
  }

  _createClass(Crypto, [{
    key: 'normalizePlaintext',
    value: function normalizePlaintext() {
      return this.input.toLowerCase().match(/[\w\d]+/g).join('');
    }

    // r x c
    // c >= r
    // c - r <= 1
    // c = # of columns
    // r = # of rows

  }, {
    key: 'dimensions',
    value: function dimensions() {
      //calculate perfect squares
      // 1 4 9 16 25 36 49 64 81 100 121
      //54 -> c = 8, r = 7
      // char length falls in range
      // perfect squares are r x r
      // imperfect squares will have 'n' empty spaces
      // these 'n' spaces should be distributed evenly across the last 'n' rows
      // perfect squares!!!!

      //find range of squares it falls in
      // ternary operator the nearby integers to fit formula
      // find spaces if imperfect square and add to size of last rows
      var rows = Math.floor(Math.sqrt(this.normalizePlaintext().length));
      var cols = rows * (rows + 1) > this.normalizePlaintext().length ? rows : rows + 1;
      return [rows, cols];
    }
  }]);

  return Crypto;
})();

exports['default'] = Crypto;
module.exports = exports['default'];