export default (hrs = 0, mins = 0) => {
  let totalMinutes = hrs * 60 + mins;

  function toString() {
    if (totalMinutes < 0) {
      totalMinutes %= 1440;
      totalMinutes += 1440;
    }
    return `${addSpacing(Math.floor((totalMinutes / 60) % 24))}:${addSpacing(Math.floor(totalMinutes % 60))}`;
  }

  function addSpacing(num) {
    return num < 10 ? `0${num}` : num;
  }

  function plus(mins) {
    totalMinutes += mins;
    return this;
  }

  function minus(mins) {
    totalMinutes -= mins;
    return this;
  }

  function equals(clock2) {
    return toString() === clock2.toString();
  }

  return {
    toString: toString,
    plus: plus,
    minus: minus,
    equals: equals
  };
};
