export default (max) => ({
  primes: () => {
    let booleans = new Array(max + 1).fill(true);

    findPrimes(booleans, max);

    return booleans.filter(el => el).slice(2);
  }()
})

function findPrimes(booleans, max) {
  for (let i = 2; i <= max; i++) {
    if (booleans[i]) {
      let step = i;
      booleans[i] = i;

      while (step < max) {
        booleans[i + step] = false;
        step += i;
      }
    }
  }

  return booleans;
}
