"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpaceAge = (function () {
  function SpaceAge(seconds) {
    _classCallCheck(this, SpaceAge);

    this.seconds = seconds;
    this.earthYears = this.onEarth();
  }

  _createClass(SpaceAge, [{
    key: "onEarth",
    value: function onEarth() {
      return +(this.seconds / 31557600).toFixed(2);
    }
  }, {
    key: "onMercury",
    value: function onMercury() {
      return +(this.earthYears / 0.2408467).toFixed(2);
    }
  }, {
    key: "onVenus",
    value: function onVenus() {
      return +(this.seconds / 31557600 / 0.61519726).toFixed(2);
    }
  }, {
    key: "onMars",
    value: function onMars() {
      return +(this.earthYears / 1.8808158).toFixed(2);
    }
  }, {
    key: "onJupiter",
    value: function onJupiter() {
      return +(this.earthYears / 11.862615).toFixed(2);
    }
  }, {
    key: "onSaturn",
    value: function onSaturn() {
      return +(this.earthYears / 29.447498).toFixed(2);
    }
  }, {
    key: "onUranus",
    value: function onUranus() {
      return +(this.earthYears / 84.016846).toFixed(2);
    }
  }, {
    key: "onNeptune",
    value: function onNeptune() {
      return +(this.earthYears / 164.79132).toFixed(2);
    }
  }]);

  return SpaceAge;
})();

exports["default"] = SpaceAge;
module.exports = exports["default"];