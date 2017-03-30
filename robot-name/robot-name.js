const USED_NAMES = {};

export default class Robot {
  constructor() {
    this.reset();
  }

  createName() {
    let randLtr = () => String.fromCharCode(65 + Math.floor(Math.random() * 26)),
        randNum = () => Math.floor(Math.random() * 10),
        name = randLtr() + randLtr() + randNum() + randNum() + randNum();
    USED_NAMES[name] ? name = this.createName() : USED_NAMES[name] = true;
    return name;
  };

  reset() {
    this.robotName = this.createName();
  }

  get name() {
    return this.robotName;
  }
};
