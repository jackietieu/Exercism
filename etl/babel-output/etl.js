// export default function(oldSet) {
//   let newSet = {};
//   for (let [score, tiles] of Object.entries(oldSet)) {
//     tiles.forEach(tile => {
//       newSet[tile.toLowerCase()] = +score;
//     })
//   }
//   return newSet;
// }

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

exports["default"] = function (oldSet) {
  return Object.entries(oldSet).reduce(function (newSet, _ref) {
    var _ref2 = _slicedToArray(_ref, 2);

    var score = _ref2[0];
    var tiles = _ref2[1];

    tiles.forEach(function (tile) {
      return newSet[tile.toLowerCase()] = +score;
    });
    return newSet;
  }, {});
};

module.exports = exports["default"];