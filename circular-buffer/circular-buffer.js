export default function circularBuffer(maxSize) {
  let buffer = [];

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

  return {read, write, clear, forceWrite}
};

export function bufferEmptyException() {return new Error('Cannot read empty buffer')};

export function bufferFullException() {return new Error('Cannot write on full buffer')};
