class Hamming {
  compute(strand1, strand2) {
    let nucleotides = strand1.length,
        hammingDifference = 0;

    if (nucleotides !== strand2.length) {
      throw new Error('DNA strands must be of equal length.');
    }

    for (let i = 0; i < nucleotides; i++) {
      if (strand1[i] !== strand2[i]) {
        hammingDifference++;
      }
    }

    return hammingDifference
  }
};

export default Hamming;
