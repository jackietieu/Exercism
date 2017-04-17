export default class Triplet {
  constructor() {
    this.sides = Array.from(arguments).sort((a, b) => a - b);
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

  static where(options) {
    let sides = [0, 0 ,0],
        result = [],
        min = options['minFactor'] || 1,
        max = options['maxFactor'],
        sum = options['sum'] ? options['sum'] : false;

    for (let a = min; a <= max; a++) {
      for (let b = a; b <= max; b++) {
        for (let c = b; c < a + b && c <= max; c++) {
          let maybeTriplet = new Triplet(a, b, c);

          if (maybeTriplet.isPythagorean() && (!sum || (sum && maybeTriplet.sum() === sum))) {
            result.push(maybeTriplet);
          }
        }
      }
    }

    return result;
  }
}
