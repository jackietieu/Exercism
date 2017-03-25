//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Bob = (function () {
  function Bob() {
    _classCallCheck(this, Bob);
  }

  _createClass(Bob, [{
    key: 'hey',
    value: function hey(message) {
      var response = 'Whatever.',
          regEx = message.match(/[a-zA-Z]+/g);

      if (message.replace(/\s/g, '') === '') {
        response = 'Fine. Be that way!';
      } else if (message.endsWith('?')) {
        if (regEx && regEx[0] === regEx[0].toUpperCase()) {
          response = 'Whoa, chill out!';
        } else {
          response = 'Sure.';
        }
      } else if (message === message.toUpperCase() && regEx) {
        response = 'Whoa, chill out!';
      }

      return response;
    }
  }]);

  return Bob;
})();

exports['default'] = Bob;
module.exports = exports['default'];