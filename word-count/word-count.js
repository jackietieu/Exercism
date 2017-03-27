class Words {
  count(phrase) {
    let phraseArray = phrase.toLowerCase().trim().split(/[ \n\t]+/),
        total = {};

    phraseArray.forEach(word => {
      total[`${word}`] = total[`${word}`] > 0 ? total[`${word}`] + 1 : 1;
    });

    return total;
  }
}

export default Words;
