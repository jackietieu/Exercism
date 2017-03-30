export default class Song {
  constructor() {
    this.animals = [``,`fly`,`spider`,`bird`,`cat`,`dog`,`goat`,`cow`,`horse`];
    this.lyrics = [
      `I don't know why she swallowed the fly. Perhaps she'll die.\n`,
      `I know an old lady who swallowed a fly.\n`,
      `I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n`,
      `I know an old lady who swallowed a bird.\nHow absurd to swallow a bird!\n`,
      `I know an old lady who swallowed a cat.\nImagine that, to swallow a cat!\n`,
      `I know an old lady who swallowed a dog.\nWhat a hog, to swallow a dog!\n`,
      `I know an old lady who swallowed a goat.\nJust opened her throat and swallowed a goat!\n`,
      `I know an old lady who swallowed a cow.\nI don't know how she swallowed a cow!\n`,
      `I know an old lady who swallowed a horse.\nShe's dead, of course!\n`
    ];
  }

  animalCatcher(verseNum) {
    let result = [];

    for (let i = 2; i <= verseNum; i++) {
      let animal = this.animals[i],
          animalToCatch = this.animals[i - 1] === 'spider' ? 'spider that wriggled and jiggled and tickled inside her' : this.animals[i - 1];
      result.unshift(`She swallowed the ${animal} to catch the ${animalToCatch}.\n`);
    }

    return result.join('');
  }

  verse(verseNum) {
    if (verseNum === 8) {
      return this.lyrics[verseNum];
    }
    let result = [];

    result.unshift(this.lyrics[0]);
    if (verseNum > 1) {
      result.unshift(this.animalCatcher(verseNum));
    }
    result.unshift(this.lyrics[verseNum]);

    return result.join('');
  }

  verses(start, end) {
    let result = [];

    for (let i = start; i <= end; i++) {
      result.push(this.verse(i));
    }

    return result.join('\n') + '\n';
  }
}
