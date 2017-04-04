'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = circularBuffer;
exports.bufferEmptyException = bufferEmptyException;
exports.bufferFullException = bufferFullException;

function circularBuffer() {
  var size = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

  var array = new Array(size),
      writeIdx = 0,
      readIdx = 0,
      elements = 0;

  function full() {
    var full = true;

    for (var i = 0; i < size; i++) {
      if (Boolean(array[i]) === false) full = false;
    }

    return full;
  }

  function read() {
    if (array.every(function (el) {
      return Boolean(el) === false;
    }) || !Boolean(array[readIdx % size]) || readIdx >= elements) {
      throw bufferEmptyException();
    } else {
      readIdx++;
      var result = array[(readIdx - 1) % size];
      array[(readIdx - 1) % size] = undefined;
      return result;
    }
  }

  function write(el) {
    if (el && !full()) {
      array[writeIdx % size] = el;
      writeIdx++;
      elements++;
    } else if (full()) {
      console.log(array);
      throw bufferFullException();
    }
  }

  function clear() {
    array.fill(undefined);
    writeIdx = 0;
    readIdx = 0;
    elements = 0;
  }

  function forceWrite(el) {
    if (!full()) {
      write(el);
    } else {
      //it's full, overwrite oldest
      array[writeIdx % size] = el;
      writeIdx++;
      readIdx++;
      elements++;
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