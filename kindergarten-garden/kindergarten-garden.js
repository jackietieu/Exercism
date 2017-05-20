const PLANTS = {
        'C': 'clover',
        'G': 'grass',
        'R': 'radishes',
        'V': 'violets'
      },
      DEFAULT_NAMES = [
        'alice',
        'bob',
        'charlie',
        'david',
        'eve',
        'fred',
        'ginny',
        'harriet',
        'ileana',
        'joseph',
        'kincaid',
        'larry'
      ]

export default class Garden {
  constructor(plants, names = DEFAULT_NAMES) {
    names = names.sort();
    this.rows = [plants.split('\n')[0], plants.split('\n')[1]];
    names.forEach((name, i) => {
      this[name.toLowerCase()] =
        this.rows.map(row => row.slice(i * 2, 2 + i * 2))
                 .join('')
                 .split('')
                 .map(plantId => PLANTS[plantId]);
    })
  }
}
