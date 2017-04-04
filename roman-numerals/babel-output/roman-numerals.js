'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var LETTER_VALUES = {
  I: 1, V: 5, X: 10, L: 50,
  C: 100, D: 500, M: 1000
},
    LETTERS = Object.keys(LETTER_VALUES),
    inRange = function inRange(min, max, val) {
  return min <= val && val < max;
};

exports['default'] = function (num) {
  var translation = '',
      rollover = 0;

  Object.entries(LETTER_VALUES).reverse().forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2);

    var letter = _ref2[0];
    var val = _ref2[1];

    var twoLettersDown = LETTERS[LETTERS.indexOf(letter) - 2],
        oneLetterDown = LETTERS[LETTERS.indexOf(letter) - 1],
        oneLetterUp = LETTERS[LETTERS.indexOf(letter) + 1],
        twoValuesDown = LETTER_VALUES[twoLettersDown],
        oneValueDown = LETTER_VALUES[oneLetterDown];

    if ((val === 50 || val === 500) && inRange(val - oneValueDown, val, num)) {
      translation += oneLetterDown + letter;
      num -= val - LETTER_VALUES[oneLetterDown];
    } else if (twoLettersDown && inRange(val - twoValuesDown, val, num)) {
      translation += twoLettersDown + letter;
      num -= val - LETTER_VALUES[twoLettersDown];
    } else if (num / val >= 1) {
      rollover = num / val;
      num %= val;
      translation += rollover === 4 ? letter + oneLetterUp : letter.repeat(rollover);
      rollover = 0;
    }
  });

  return translation;
};

module.exports = exports['default'];