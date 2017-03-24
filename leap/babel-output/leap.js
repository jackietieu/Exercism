"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function isLeapYear(year) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      return true;
    }
    return false;
  } else if (year % 4 === 0) {
    return true;
  }
}

exports["default"] = isLeapYear;
module.exports = exports["default"];