const LETTER_VALUES = {
  I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
},
LETTERS = Object.keys(LETTER_VALUES);

export default (num) => {
  let translation = '',
      rollover = 0;

  Object.entries(LETTER_VALUES).reverse().forEach(([letter, val]) => {
    let twoLettersDown = LETTERS[LETTERS.indexOf(letter) - 2],
        oneLetterDown = LETTERS[LETTERS.indexOf(letter) - 1],
        oneValueDown = LETTER_VALUES[oneLetterDown];

    if ((val === 50 || val === 500) && (num >= val - oneValueDown) && (num < val)) {
      translation += oneLetterDown + letter;
      num -= (val - LETTER_VALUES[oneLetterDown]);
    } else if (twoLettersDown && (num < val) && (num >= (val - LETTER_VALUES[LETTERS[LETTERS.indexOf(letter) - 2]]))) {
      translation += twoLettersDown + letter;
      num -= (val - LETTER_VALUES[twoLettersDown]);
    } else if (num / val >= 1) {
      rollover = num / val;
      num %= val;
    }

    if (rollover !== 4) {
      translation += letter.repeat(rollover);
    } else {
      translation += letter + LETTERS[LETTERS.indexOf(letter) + 1];
    }

    rollover = 0;
  });

  return translation;
}
