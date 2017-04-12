const ALPHA = 'abcdefghijklmnopqrstuvwxyz',
      keyGen = () => (
        Array.from({length: 100})
             .map(el => ALPHA[Math.floor(Math.random() * ALPHA.length)])
             .join('')
      ),
      code = (str, key, encode) => str.split('').map((letter, i) => {
        let shift = ALPHA.indexOf(key[i]) * (encode ? 1 : -1);
        return ALPHA[((ALPHA.indexOf(letter) + shift + ALPHA.length) % ALPHA.length)];
      }).join('');

export default inputKey => {
  if (inputKey === '' || (inputKey && inputKey.match(/[^a-z]/))) throw new Error('Bad key');

  let key = inputKey || keyGen();

  return {
    key,
    encode: str => code(str, key, true),
    decode: str => code(str, key, false)
  }
}
