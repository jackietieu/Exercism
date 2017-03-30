// export default function(oldSet) {
//   let newSet = {};
//   for (let [score, tiles] of Object.entries(oldSet)) {
//     tiles.forEach(tile => {
//       newSet[tile.toLowerCase()] = +score;
//     })
//   }
//   return newSet;
// }
//
// Both solutions are O(n^2) time complexity
// Bottom solution is a better practice since state creation is minimal
export default oldSet =>
  Object.entries(oldSet).reduce((newSet, [score, tiles]) => {
    tiles.forEach(tile => newSet[tile.toLowerCase()] = +score);
    return newSet;
  }, {})
