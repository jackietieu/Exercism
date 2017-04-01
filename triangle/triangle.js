export default class Triangle {
  constructor() {
    this.sides = Array.from(arguments);
  }

  kind() {
    let type = 'scalene';

    for (let i = 0; i < 3; i++) {
      if ((this.sides[0] + this.sides[1] < this.sides[2]) || (this.sides[0] <= 0)) {
          throw new Error('Illegal side length(s)');
      } else if (this.sides[0] === this.sides[1] && this.sides[0] !== this.sides[2]) {
        type = 'isosceles';
      } else if (this.sides.slice(1).every(side => side === this.sides[0])) {
        type = 'equilateral';
      }
      this.sides.unshift(this.sides.pop());
    }

    return type;
  }
}
