export default (input) => ({
  largestProduct: (length) => {
    if (input.match(/[^\d]/) || length < 1) {
      throw new Error('Invalid input.')
    } else if (length > input.length) {
      throw new Error('Slice size is too big.')
    } else if (length === 0) {
      return 1;
    }

    let convertedInput = input.split('').map(numStr => +numStr),
        largest,
        current = convertedInput[0],
        nonZeroSpan = [],
        currentSpanSize = 1;

    convertedInput.slice(1).forEach((num, i) => {
      if (num !== 0 && currentSpanSize !== length) {
        nonZeroSpanProduct.push(num);
      } else if (num !== 0) {
        nonZeroSpanProduct /=
      }

      if (currentSpanSize < length) {
        currentSpanSize++;
        current *= num;

        if (currentSpanSize === length) {
          largest = current;
        }
      } else {
        if (convertedInput[i - length] === 0) {

        }
        current /= convertedInput[i - length];
        current *= num;
      }

      if (current > largest) {
        largest = current;
      }
    })

    return largest;
  }
})
