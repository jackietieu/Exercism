//O(n) time complexity and O(1) space, better than using sort()

export default class Anagram {
  constructor(wordToMatch) {
    this.originalWord = wordToMatch.toLowerCase();
    this.originalWordVal = this.stringValue(this.originalWord);
  }

  stringValue(str) {
    let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53,
      59, 61, 67, 71, 73, 79, 83, 89, 97, 101],
        val = 0;

    str.toLowerCase().split('').forEach(char => {
      val += primes[char.charCodeAt(0) - 97];
    });

    return val;
  }

  matches(possibleAnagrams) {
    if (!(possibleAnagrams instanceof Array)) {
        possibleAnagrams = Array.from(arguments);
      }

    let result = [];

    possibleAnagrams.forEach(word => {
      if (this.originalWord === word.toLowerCase()) {
        return;
      } else if (this.stringValue(word) === this.originalWordVal) {
        result.push(word);
      }
    });

    return result;
  }
}
