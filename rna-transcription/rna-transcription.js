class Transcriptor {
  constructor() {
    this.translations = {
      'A': 'U',
      'G': 'C',
      'T': 'A',
      'C': 'G'
    };
  }

  toRna(dna) {
    return dna.split('').map(this.translate.bind(this)).join('');
  }

  translate(nucleotide) {
    let translatedToRna = this.translations[nucleotide];
    if (translatedToRna) {
      return translatedToRna;
    } else {
      throw new Error('Invalid input DNA.');
    }
  }
}

export default Transcriptor;
