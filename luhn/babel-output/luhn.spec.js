'use strict';

var _luhn = require('./luhn');

var _luhn2 = _interopRequireDefault(_luhn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Luhn', function () {

  it('single digit strings can not be valid', function () {
    var luhn = new _luhn2.default('1');
    expect(luhn.valid).toEqual(false);
  });

  it('A single zero is invalid', function () {
    var luhn = new _luhn2.default('0');
    expect(luhn.valid).toEqual(false);
  });

  it('valid Canadian SIN', function () {
    var luhn = new _luhn2.default('046 454 286');

    expect(luhn.valid).toEqual(true);
  });

  it('invalid Canadian SIN', function () {
    var luhn = new _luhn2.default('046 454 287');
    expect(luhn.valid).toEqual(false);
  });

  it('invalid credit card', function () {
    var luhn = new _luhn2.default('8273 1232 7352 0569');
    expect(luhn.valid).toEqual(false);
  });

  it('valid strings with a non-digit added become invalid', function () {
    var luhn = new _luhn2.default('046a 454 286');
    expect(luhn.valid).toEqual(false);
  });
});