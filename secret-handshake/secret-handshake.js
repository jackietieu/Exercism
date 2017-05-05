export default class SecretHandshake {
  constructor(value) {
    throw new Error('Handhake muse be a number') if typeof value !== 'number';
    this.value = value;
  }

  commands() {
    
  }
}
