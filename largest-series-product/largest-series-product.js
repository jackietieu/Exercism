export default (input) => ({
  largestProduct: (length) => {
    if (input.match(/[^\d]/) || length < 0) {
      throw new Error('Invalid input.')
    } else if (length > input.length) {
      throw new Error('Slice size is too big.')
    } else if (length === 0) {
      return 1;
    }

    let convertedInput = input.split('').map(numStr => +numStr),
        largest,
        span = [],
        zeroes = 0,
        current = convertedInput[0],
        currentSpanSize = 0;

    for (let i = 0; i < convertedInput.length; i++) {
      let num = convertedInput[i];
      if (num === 0) {
        zeroes++;
      }

      if (currentSpanSize < length) {
        currentSpanSize++;
        span.push(num);
        current *= num;

        if (currentSpanSize === length) {
          largest = current;
        }
      } else {
        span.push(num);

        if (span.shift() === 0) {
          zeroes--;
        }

        if (zeroes) {
          continue;
        }

        current = span.reduce((acc, num) => acc * num);
      }

      if (current > largest) {
        largest = current;
      }
    }

    return largest;
  }
})
