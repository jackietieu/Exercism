export default class PigLatin {
  constructor() {
    this.cases = {
      'ch' : '^ch',
      ' qu': '^[^aeiou]qu',
      'qu' : '^[qu]',
      'sch': '^sch',
      'th' : '^th[^r]',
      'thr': '^thr',
      ' '  : '^[^aeiou][^qhc]'
    };
  }

  translate(phrase) {
    return phrase.split(' ').map(word => {
      Object.entries(this.cases).forEach(([charsToSwap, regexp]) => {
        if (new RegExp(`${regexp}`).test(word)) {
          word = word.slice(charsToSwap.length).concat(word.slice(0, charsToSwap.length));
        }
      })

      return word + 'ay';
    }).join(' ');
  }
}
