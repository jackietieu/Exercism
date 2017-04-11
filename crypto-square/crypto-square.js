export default class Crypto {
  constructor(str) {
    this.input = str;
    this.normalized = this.normalizePlaintext();
    this.cols = this.size();
  }

  normalizePlaintext() {
    return this.input.toLowerCase().match(/[\w\d]+/g).join('');
  }

  size() {
    return Math.ceil(Math.sqrt(this.normalized.length));
  }

  plaintextSegments() {
    let result = [];

    for (let i = 0; i < this.normalized.length; i++) {
      result[Math.floor(i / this.cols)] === undefined ?
        result[Math.floor(i / this.cols)] = [this.normalized[i]] :
        result[Math.floor(i / this.cols)].push(this.normalized[i]);
    }

    return result.map(el => el.join(''));
  }

  ciphertext() {
    let result = [];

    this.plaintextSegments().forEach(segment => {
      for(let i = 0; i < segment.length ; i++) {
        result[i % this.cols] === undefined ?
          result[i % this.cols] = segment[i] :
          result[i % this.cols] += segment[i];
      }
    })

    return result.join('');
  }
}
