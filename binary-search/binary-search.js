export default (input) => {
  return {
    array: isSorted(input),
    indexOf(target, searchArray = input) {
      if (searchArray.length === 0) {
        return -1;
      }

      let firstHalf = searchArray.slice(0, parseInt(searchArray.length / 2)),
          secondHalf = searchArray.slice(parseInt(searchArray.length / 2) + 1),
          midIdx = parseInt(searchArray.length / 2);

      if (target === searchArray[midIdx]) {
        return midIdx;
      } else if (target < searchArray[midIdx]) {
        return this.indexOf(target, firstHalf);
      } else if (target > searchArray[midIdx]) {
        let index = this.indexOf(target, secondHalf);
        return index !== -1 ? index + midIdx + 1 : -1;
      }
    }
  }
}

function isSorted(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return undefined;
    }
  }

  return array;
}
