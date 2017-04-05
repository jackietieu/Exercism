'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = circularBuffer;
exports.bufferEmptyException = bufferEmptyException;
exports.bufferFullException = bufferFullException;

function circularBuffer(maxSize) {
  var buffer = [];

  function read() {
    if (buffer.length === 0) {
      throw bufferEmptyException();
    } else {
      return buffer.shift();
    }
  }

  function write(el) {
    if (Boolean(el) && buffer.length < maxSize) {
      buffer.push(el);
    } else if (buffer.length === maxSize) {
      throw bufferFullException();
    }
  }

  function clear() {
    buffer = [];
  }

  function forceWrite(el) {
    if (buffer.length !== maxSize) {
      write(el);
    } else {
      buffer.shift();
      buffer.push(el);
    }
  }

  return { read: read, write: write, clear: clear, forceWrite: forceWrite };
}

;

function bufferEmptyException() {
  return new Error('Cannot read empty buffer');
}

;

function bufferFullException() {
  return new Error('Cannot write on full buffer');
}

;