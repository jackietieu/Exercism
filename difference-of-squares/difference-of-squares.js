export default class Squares {
  constructor(max) {
    this.range = Array.from(Array(max), (_, i) => i);
    this.squareOfSums = this.range.reduce((acc, val) => acc + val * val);
    this.sumOfSquares = this.range.map(val => val * val).reduce((acc, val) => acc + val);
    this.difference = this.sumOfSquares - this.squareOfSums;
  }
}
