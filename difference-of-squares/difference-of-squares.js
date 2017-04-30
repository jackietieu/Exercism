export default class Squares {
  constructor(max) {
    this.range = Array.from(Array(max), (_, i) => i + 1);
    this.squareOfSums = this.range.reduce((acc, val) => acc + val) ** 2;
    this.sumOfSquares = this.range.map(val => val ** 2).reduce((acc, val) => acc + val);
    this.difference = this.squareOfSums - this.sumOfSquares;
  }
}
