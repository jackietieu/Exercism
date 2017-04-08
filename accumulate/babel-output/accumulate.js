"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (array, cb) {
  var result = [];

  array.forEach(function (el) {
    return result.push(cb(el));
  });

  return result;
};

module.exports = exports["default"];