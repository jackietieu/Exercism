// export default class Triplet {
//   constructor() {
//     this.sides = Array.from(arguments).sort();
//   }
//
//   sum() {
//     return this.sides.reduce((sum, val) => sum + val);
//   }
//
//   product() {
//     return this.sides.reduce((product, val) => product * val);
//   }
//
//   isPythagorean() {
//     return Math.pow(this.sides[0], 2) + Math.pow(this.sides[1], 2) === Math.pow(this.sides[2], 2);
//   }
//
//   where(options) {
//     let sides = [0, 0 ,0],
//         result = [],
//         min = options['minFactor'] || 1,
//         max = options['maxFactor'],
//         sum = options['sum'] ? options['sum'] : false;
//
//     for (let a = min; min < max; a++) {
//       for (let b = min; min < max; b++) {
//         for (let c = a + b; c <= max; c++) {
//           let maybeTriplet = new Triplet(a, b, c);
//
//           if (maybeTriplet.isPythagorean()) {
//             if (sum && maybeTriplet.sum() !== sum) {
//               continue;
//             } else {
//               result.push(maybeTriplet);
//             }
//           }
//         }
//       }
//     }
//
//     return result;
//   }
// }

// export default function Triplet() {
//   let sides = Array.from(arguments).sort(),
//       sum = () => sides.reduce((sum, val) => sum + val),
//       product = () => sides.reduce((product, val) => product * val)
//
//   return {
//     sum,
//     product
//   }
// }

export default input => {
  let sides = Array.from(input).sort(),
      sum = () => sides.reduce((sum, val) => sum + val),
      product = () => sides.reduce((product, val) => product * val)

  return {
    sum,
    product
  }
}
