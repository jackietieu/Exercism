'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _phoneNumber = require('./phone-number');

var _phoneNumber2 = _interopRequireDefault(_phoneNumber);

describe('PhoneNumber()', function () {

  it('cleans the number', function () {
    var phone = new _phoneNumber2['default']('(123) 456-7890');
    expect(phone.number()).toEqual('1234567890');
  });

  it('cleans numbers with dots', function () {
    var phone = new _phoneNumber2['default']('123.456.7890');
    expect(phone.number()).toEqual('1234567890');
  });

  it('cleans numbers with multiple spaces', function () {
    var phone = new _phoneNumber2['default']('123 456   7890   ');
    expect(phone.number()).toEqual('1234567890');
  });

  it('invalid when 9 digits', function () {
    var phone = new _phoneNumber2['default']('123456789');
    expect(phone.number()).toEqual(null);
  });

  it('invalid when 11 digits', function () {
    var phone = new _phoneNumber2['default']('21234567890');
    expect(phone.number()).toEqual(null);
  });

  it('valid when 11 digits and starting with 1', function () {
    var phone = new _phoneNumber2['default']('11234567890');
    expect(phone.number()).toEqual('1234567890');
  });

  it('invalid when 12 digits', function () {
    var phone = new _phoneNumber2['default']('321234567890');
    expect(phone.number()).toEqual(null);
  });

  it('invalid with letters', function () {
    var phone = new _phoneNumber2['default']('123-abc-7890');
    expect(phone.number()).toEqual(null);
  });

  it('invalid with punctuations', function () {
    var phone = new _phoneNumber2['default']('123-@:!-7890');
    expect(phone.number()).toEqual(null);
  });

  it('invalid with right number of digits but letters mixed in', function () {
    var phone = new _phoneNumber2['default']('1a2b3c4d5e6f7g8h9i0j');
    expect(phone.number()).toEqual(null);
  });
});