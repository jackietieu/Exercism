"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var filter = function filter(array, cb) {
  var retain = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

  var result = [];
  array.map(function (el) {
    return cb(el) ? retain ? el : false : retain ? false : el;
  }).forEach(function (el) {
    if (el) result.push(el);
  });
  return result;
};

exports["default"] = {
  keep: function keep(array, cb) {
    return filter(array, cb);
  },
  discard: function discard(array, cb) {
    return filter(array, cb, false);
  }
};
module.exports = exports["default"];