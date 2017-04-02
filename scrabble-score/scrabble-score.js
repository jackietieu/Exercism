const POINTS_INDEX = {
  D: 2, G: 2, B: 3, C: 3, M: 3, P: 3, F: 4, H: 4,
  V: 4, W: 4, Y: 4, K: 5, J: 8, X: 8, Q: 10, Z: 10
}

export default (str) => {
  if (!str) return 0;
  return str.toUpperCase()
    .split('')
    .reduce((score, letter) => score + (POINTS_INDEX[letter] || 1), 0);
}
