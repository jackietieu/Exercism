'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Series = function () {
  function Series(str) {
    _classCallCheck(this, Series);

    this.str = str;
    this.digits = str.split('').map(function (el) {
      return +el;
    });
  }

  _createClass(Series, [{
    key: 'slices',
    value: function slices(length) {
      if (this.digits.length < length) throw new Error('Slice size is too big.');

      var result = [];

      for (var i = 0; i <= this.str.length - length; i++) {
        var slice = this.digits.slice(i, i + length);
        if (slice.length === length) {
          result.push(slice);
        }
      }

      return result;
    }
  }]);

  return Series;
}();

exports.default = Series;