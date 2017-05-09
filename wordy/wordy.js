export default {
  WordProblem(question) {
    const OPERATIONS = {
      'plus': '+',
      'minus': '-',
      'multiplied': '*',
      'divided': '/'
    }

    let numbers = question.match(/(\d+|plus|minus|divided|multiplied)+/g),
    operations = question.match(/(plus|minus|divided|multiplied)+/g);

    if (!operations) {
      throw new Error('Too advanced.');
    }

    return {
      answer() {
        return numbers.reduce((acc, val, i) => eval(`${acc}${OPERATIONS[operations[i]]}${val}`));
      }
    }
  }
}
