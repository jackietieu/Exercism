export default class Anagram {
  constructor(wordToMatch) {
    this.originalWord = wordToMatch.toLowerCase();
    this.wordToMatch = this.originalWord.split('').sort().join('');
  }

  matches(possibleAnagrams) {
    if (!(possibleAnagrams instanceof Array)) {
      possibleAnagrams = Array.from(arguments);
    }

    let result = [];

    possibleAnagrams.forEach(word => {
      if (word.toLowerCase() === this.originalWord) {
        return;
      } else if (word.toLowerCase().split('').sort().join('') === this.wordToMatch) {
        result.push(word);
      }
    });

    return result;
  }
}
