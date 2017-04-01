"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  var hrs = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var mins = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

  var totalMinutes = hrs * 60 + mins;

  function toString() {
    if (totalMinutes < 0) {
      totalMinutes %= 1440;
      totalMinutes += 1440;
    }
    return addSpacing(Math.floor(totalMinutes / 60 % 24)) + ":" + addSpacing(Math.floor(totalMinutes % 60));
  }

  function addSpacing(num) {
    return num < 10 ? "0" + num : num;
  }

  function plus(mins) {
    totalMinutes += mins;
    return this;
  }

  function minus(mins) {
    totalMinutes -= mins;
    return this;
  }

  function equals(clock2) {
    return toString() === clock2.toString();
  }

  return {
    toString: toString,
    plus: plus,
    minus: minus,
    equals: equals
  };
};

module.exports = exports["default"];