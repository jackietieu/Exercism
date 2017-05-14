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
        current = convertedInput[0],
        currentSpanSize = 0;

    for (let i = 0; i < convertedInput.length; i++) {
      let num = convertedInput[i];

      if (currentSpanSize < length) {
        currentSpanSize++;
        span.push(num);
        current *= num;

        if (currentSpanSize === length) {
          largest = current;
        }
      } else {
        span.shift();
        span.push(num);

        current = span.reduce((acc, num) => acc * num);
      }

      if (current > largest) {
        largest = current;
      }
    }

    return largest;
  }
})
