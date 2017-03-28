class PhoneNumber {
  constructor(input) {
    this.possibleTelNum = input.replace(/\s/g, '');
  }

  number() {
    let result = null;

    if (this.possibleTelNum.match(/[^0-9\-().]/) === null) {
      let numbersOnly = this.possibleTelNum.match(/\d+/g).join('');

      if (numbersOnly.length === 11 && numbersOnly[0] == 1) {
        result = numbersOnly.slice(1);
      } else if (numbersOnly.length === 10) {
        result = numbersOnly;
      }
    }

    return result;
  }
}

export default PhoneNumber;
