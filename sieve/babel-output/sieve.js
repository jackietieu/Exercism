"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (max) {
  return {
    primes: (function () {
      var booleans = new Array(max + 1).fill(true);

      findPrimes(booleans, max);

      return booleans.filter(function (el) {
        return el;
      }).slice(2);
    })()
  };
};

function findPrimes(booleans, max) {
  for (var i = 2; i <= max; i++) {
    if (booleans[i]) {
      var step = i;
      booleans[i] = i;

      while (step < max) {
        booleans[i + step] = false;
        step += i;
      }
    }
  }

  return booleans;
}
module.exports = exports["default"];