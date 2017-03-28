'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Beer = (function () {
  function Beer() {
    _classCallCheck(this, Beer);
  }

  _createClass(Beer, [{
    key: 'verse',
    value: function verse(bottles) {
      result = '';

      if (bottles > 0) {
        result = bottles + ' bottles of beer on the wall, ' + bottles + ' bottles of beer.\n      Take ' + (bottles === 1 ? 'it' : 'one') + ' down and pass it around, ' + (bottles - 1) + ' bottles of beer on the wall.';
      } else {
        result = 'No more bottles of beer on the wall, no more bottles of beer.\n      Go to the store and buy some more, 99 bottles of beer on the wall.';
      }

      return result;
    }
  }, {
    key: 'sing',
    value: function sing() {
      var startBottles = arguments.length <= 0 || arguments[0] === undefined ? 99 : arguments[0];
      var endBottles = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

      for (var i = startBottles; i >= endBottles; i--) {
        this.verse(i);
      }
    }
  }]);

  return Beer;
})();

module.exports = Beer;