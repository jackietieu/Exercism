export default (input) => {
  let num = input.match(/\d/g),
      doubled = num.reverse().map((digit, i) => (i - 1) % 2 === 0 ?
        +(((digit * 2) >= 10 ? (digit * 2) - 9 : digit * 2) % 10) : +digit),
      valid = (input.length === 1 || input.match(/[^\d\s]/)) ?
        false : !(doubled.reduce((sum, val) => sum + val) % 10);

  return {valid};
}
