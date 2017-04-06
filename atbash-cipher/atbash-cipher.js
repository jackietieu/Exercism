const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

export default {
  encode: (str) => {
    str = str.toLowerCase().match(/[\w\d]+/g).join('').split('');
    return str.map((char, i) => {
      return (i % 5 === 0 && i > 0 ? ' ' : '') +
        (ALPHABET[25 - ALPHABET.indexOf(char)] || char);
    }).join('');
  }
}
