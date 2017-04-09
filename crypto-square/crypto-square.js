export default class Crypto {
  constructor(str) {
    this.input = str;
    this.dimensions = this.dimensions();
    this.size = () => this.dimensions()[1];
  }

  normalizePlaintext() {
    return this.input.toLowerCase().match(/[\w\d]+/g).join('');
  }

  plaintextSegments() {

  }

  cipherText() {
    //chunks


  }

  // r x c
  // c >= r
  // c - r <= 1
  // c = # of columns
  // r = # of rows

  dimensions() {
    //calculate perfect squares
    // 1 4 9 16 25 36 49 64 81 100 121
    //54 -> c = 8, r = 7
    // char length falls in range
    // perfect squares are r x r
    // imperfect squares will have 'n' empty spaces
    // these 'n' spaces should be distributed evenly across the last 'n' rows
    // perfect squares!!!!

    //find range of squares it falls in
    // ternary operator the nearby integers to fit formula
    // find spaces if imperfect square and add to size of last rows
    let rows = Math.floor(Math.sqrt(this.normalizePlaintext().length));
    let cols = rows * (rows + 1) > this.normalizePlaintext().length ? rows : rows + 1;
    return [rows, cols];
  }
}
