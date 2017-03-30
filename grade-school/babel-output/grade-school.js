"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  var _roster = {},
      _add = function _add(student, grade) {
    _roster[grade] ? _roster[grade].push(student) : _roster[grade] = [student];
    _roster[grade].sort();
  },
      deepCopy = function deepCopy(db) {
    return JSON.parse(JSON.stringify(db));
  };

  return {
    roster: function roster() {
      return deepCopy(_roster);
    },
    add: function add(student, grade) {
      return _add(student, grade);
    },
    grade: function grade(searchVal) {
      return deepCopy(_roster[searchVal] || []);
    }
  };
};

module.exports = exports["default"];