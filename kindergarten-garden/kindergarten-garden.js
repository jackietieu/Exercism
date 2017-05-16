export default class Garden {
  constructor(plants) {
    this.rows = [plants.split('\n')[0], plants.split('\n')[1]];
  }
}
