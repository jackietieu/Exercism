class WordProblem {
  constructor(question) {
    this.numbers = question.match(/-[\d]+|\d+/g);
    this.operations = question.match(/(plus|minus|divided|multiplied)+/g);
    this.opTranslation = {
      'plus': '+',
      'minus': '-',
      'multiplied': '*',
      'divided': '/'
    }
  }

  answer() {
    if (!this.operations) {
      throw new ArgumentError();
    }

    let result = this.numbers[0];

    this.numbers.slice(1).forEach((val, i) => {
      result = String(eval(this.checkDoubleNegative(result+this.opTranslation[this.operations[i]]+val)));
    })

    return +result;
  }

  checkDoubleNegative(str){
    return str.replace(/--/g, '+');
  }
}

function ArgumentError() {
  return new Error('Too advanced.');
}

export { WordProblem, ArgumentError };
