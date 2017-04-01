'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Triangle = (function () {
  function Triangle() {
    _classCallCheck(this, Triangle);

    this.sides = Array.from(arguments);
  }

  _createClass(Triangle, [{
    key: 'kind',
    value: function kind() {
      var _this = this;

      var type = 'scalene';

      for (var i = 0; i < 3; i++) {
        if (this.sides[0] + this.sides[1] < this.sides[2] || this.sides[0] <= 0) {
          throw new Error('Illegal side length(s)');
        } else if (this.sides[0] === this.sides[1] && this.sides[0] !== this.sides[2]) {
          type = 'isosceles';
        } else if (this.sides.slice(1).every(function (side) {
          return side === _this.sides[0];
        })) {
          type = 'equilateral';
        }
        this.sides.unshift(this.sides.pop());
      }

      return type;
    }
  }]);

  return Triangle;
})();

exports['default'] = Triangle;
module.exports = exports['default'];