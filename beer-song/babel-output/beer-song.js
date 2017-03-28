'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Beer = (function () {
  function Beer() {
    _classCallCheck(this, Beer);
  }

  _createClass(Beer, [{
    key: 'verse',
    value: function verse(bottles) {
      var beerOnTheWall = (bottles || 'No more') + ' ' + (bottles === 1 ? 'bottle' : 'bottles'),
          passOrBuy = bottles === 0 ? 'Go to the store and buy some more' : 'Take ' + (bottles === 1 ? 'it' : 'one') + ' down and pass it around',
          result = beerOnTheWall + ' of beer on the wall, ' + beerOnTheWall.toLowerCase() + ' of beer.\n' + passOrBuy + ', ' + (bottles ? bottles - 1 || 'no more' : '99') + ' ' + (bottles - 1 === 1 ? 'bottle' : 'bottles') + ' of beer on the wall.\n';

      return result;
    }
  }, {
    key: 'sing',
    value: function sing() {
      var startBottles = arguments.length <= 0 || arguments[0] === undefined ? 99 : arguments[0];
      var endBottles = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

      var verses = [];
      for (var i = startBottles; i >= endBottles; i--) {
        verses.push(this.verse(i));
      }

      return verses.join('\n');
    }
  }]);

  return Beer;
})();

exports['default'] = new Beer();
module.exports = exports['default'];