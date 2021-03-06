const LETTER_VALUES = {
        I: 1, V: 5, X: 10, L: 50,
        C: 100, D: 500, M: 1000
      },
      LETTERS = Object.keys(LETTER_VALUES),
      inRange = (min, max, val) => min <= val && val < max;

export default (num) => {
  let translation = '',
      rollover = 0;

  Object.entries(LETTER_VALUES).reverse().forEach(([letter, val]) => {
    let twoLettersDown = LETTERS[LETTERS.indexOf(letter) - 2],
        oneLetterDown = LETTERS[LETTERS.indexOf(letter) - 1],
        oneLetterUp = LETTERS[LETTERS.indexOf(letter) + 1],
        twoValuesDown = LETTER_VALUES[twoLettersDown],
        oneValueDown = LETTER_VALUES[oneLetterDown];

    if ((val === 50 || val === 500) && inRange(val - oneValueDown, val, num)) {
      translation += oneLetterDown + letter;
      num -= (val - LETTER_VALUES[oneLetterDown]);
    } else if (twoLettersDown && inRange(val - twoValuesDown, val, num)) {
      translation += twoLettersDown + letter;
      num -= (val - LETTER_VALUES[twoLettersDown]);
    } else if (num / val >= 1) {
      rollover = num / val;
      num %= val;
      translation += rollover === 4 ? letter + oneLetterUp : letter.repeat(rollover);
      rollover = 0;
    }
  });

  return translation;
}
