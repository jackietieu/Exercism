export default class Triplet {
  constructor() {
    this.sides = Array.from(arguments).sort();
  }

  sum() {
    return this.sides.reduce((sum, val) => sum + val);
  }

  product() {
    return this.sides.reduce((product, val) => product * val);
  }

  isPythagorean() {
    return Math.pow(this.sides[0], 2) + Math.pow(this.sides[1], 2) === Math.pow(this.sides[2], 2);
  }

  where(options) {
    
  }
}
