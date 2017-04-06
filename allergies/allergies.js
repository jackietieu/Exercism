const ALLERGIES = {
  1: 'eggs',
  2: 'peanuts',
  4: 'shellfish',
  8: 'strawberries',
  16: 'tomatoes',
  32: 'chocolate',
  64: 'pollen',
  128: 'cats'
}

function allergenValues(max) {
  let values = [1];

  while (values.slice(-1)[0] < max) {
    values.push(Math.pow(2, values.length));
  }

  return values;
}


export default function(score) {
  this.list: () => {
    let possibleValues = allergenValues(score),
        result = [];

    if (ALLERGIES[score]) {
      result.push(ALLERGIES[score]);
    } else {
      possibleValues.reverse().forEach(value => {
        if (score - value >= 0 && ALLERGIES[value]) {
          score -= value;
          result.push(ALLERGIES[value]);
        }
      })
    }

    return result.reverse();
  }
  this.allergicTo: (allergen) => {
    let allergenList = this.list();
    return allergenList.includes(allergen);
  }
}
