"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var USED_NAMES = {};

var Robot = (function () {
  function Robot() {
    _classCallCheck(this, Robot);

    this.reset();
  }

  _createClass(Robot, [{
    key: "createName",
    value: function createName() {
      var randLtr = function randLtr() {
        return String.fromCharCode(65 + Math.floor(Math.random() * 26));
      },
          randNum = function randNum() {
        return Math.floor(Math.random() * 10);
      },
          name = randLtr() + randLtr() + randNum() + randNum() + randNum();
      USED_NAMES[name] ? name = this.createName() : USED_NAMES[name] = true;
      return name;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.robotName = this.createName();
    }
  }, {
    key: "name",
    get: function get() {
      return this.robotName;
    }
  }]);

  return Robot;
})();

exports["default"] = Robot;
;
module.exports = exports["default"];