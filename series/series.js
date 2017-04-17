export default class Series {
  constructor(str) {
    this.str = str;
    this.digits = str.split('').map(el => +el);
  }

  slices(length) {
    if (this.digits.length < length) throw new Error('Slice size is too big.');

    let result = [];

    for (let i = 0; i <= this.str.length - length; i++) {
      let slice = this.digits.slice(i, i + length);
      if (slice.length === length) {
        result.push(slice);
      }
    }

    return result;
  }
}
