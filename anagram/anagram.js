class Anagram {
  constructor(wordToMatch) {
    this.wordToMatch = wordToMatch.toLowerCase();
    this.countHash = this.countHashConverter();
  }

  countHashConverter() {
    let countHash = {};

    this.wordToMatch.split('').forEach(char => {
      countHash[`${char}`] ? countHash[`${char}`]++ : countHash[`${char}`] = 1;
    });

    return countHash;
  }

  checkObjEquality(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }

    for (let i in obj1) {
      if (!obj2.hasOwnProperty(i) || obj1[i] !== obj2[i]) {
        return false;
      }
    }

    return true;
  }

  matches(possibleAnagrams) {
    if (!(possibleAnagrams instanceof Array)) {
      possibleAnagrams = Array.from(arguments);
    }

    let result = [];

    possibleAnagrams.forEach(possibleMatch => {
      if (possibleMatch.toLowerCase() === this.wordToMatch) {
        return;
      }

      let countHashCopy = {};

      for (let i = 0; i < possibleMatch.length; i++) {
        let lowerCaseChar = possibleMatch[i].toLowerCase();
        countHashCopy[lowerCaseChar] ? countHashCopy[lowerCaseChar]++ : countHashCopy[lowerCaseChar] = 1;
      }

      if (this.checkObjEquality(this.countHash, countHashCopy)) {
        result.push(possibleMatch);
      }
    });

    return result;
  }
}

export default Anagram;
