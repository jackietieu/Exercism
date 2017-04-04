export default function circularBuffer(size = 0) {
  let array = new Array(size),
      writeIdx = 0,
      readIdx = 0,
      elements = 0;

  function full() {
    let full = true;

    for (let i = 0; i < size; i++) {
      if (Boolean(array[i]) === false) full = false;
    }

    return full;
  }

  function read() {
    if (array.every(el => Boolean(el) === false) || !Boolean(array[readIdx % size]) || readIdx >= elements) {
      throw bufferEmptyException();
    } else {
      readIdx++;
      let result = array[(readIdx - 1) % size];
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
      array[writeIdx % size] = el;
      writeIdx++;
      readIdx++;
      elements++;
    }
  }

  return {read, write, clear, forceWrite};
};

export function bufferEmptyException() {return new Error('Cannot read empty buffer')};

export function bufferFullException() {return new Error('Cannot write on full buffer')};
