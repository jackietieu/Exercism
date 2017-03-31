let bigInt = require('big-integer');

export default () => ({
  square: tile => bigInt(2).pow(tile - 1).toString(),
  total: () => bigInt(2).pow(64).minus(1).toString()
});
