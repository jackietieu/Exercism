class Pangram {
  constructor(sentence) {
    this.sentence = sentence.toLowerCase();
  }

  isPangram() {
    let lettersHash = {},
        lettersFound = 0,
        z = 'z'.charCodeAt(0);

    for (let i = 0; i < this.sentence.length; i++) {
      let alphabetIdx = z - this.sentence.charCodeAt(i),
          currentChar = this.sentence[i];

      if (alphabetIdx >= 0 && alphabetIdx <= 25 && !lettersHash[`${currentChar}`]) {
        lettersHash[`${currentChar}`] = true;
        lettersFound++;
      }

      if (lettersFound === 26) {
        return true;
      }
    }

    return false;
  }
}

export default Pangram;
