class PerfectNumbers {
  classify(num) {
    if (num <= 0) {
      return 'Classification is only possible for natural numbers.';
    }

    let aliquotSum = this.sumFactors(num),
        classification = 'perfect';

    if (aliquotSum < num || num === 1) {
      classification = 'deficient';
    } else if (aliquotSum > num) {
      classification = 'abundant';
    }

    return classification;
  }

  sumFactors(num) {
    let lastPossibleFactor = num / 2,
        factors = [1];
    for (let i = 2; i <= lastPossibleFactor; i++) {
      if (num % i === 0) {
        factors.push(i);
      }
    }

    return factors.reduce((a, b) => (a + b));
  }
}

export default PerfectNumbers;
