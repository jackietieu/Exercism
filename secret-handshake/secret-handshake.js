export default class SecretHandshake {
  constructor(value) {
    if (typeof value !== 'number') {
      throw new Error('Handshake must be a number');
    }

    this.value = value;
    this.bits = [...Array(5)].map((_, i) => 2 ** i);
    this.actions = [
      'wink',
      'double blink',
      'close your eyes',
      'jump',
      'reverse'
    ]
  }

  commands() {
    let result = [];

    this.bits.forEach((bit, i) => {
      if (i === 4 && this.value & bit) {
        result.reverse();
      } else if (this.value & bit) {
        result.push(this.actions[i]);
      }
    })

    return result;
  }
}
