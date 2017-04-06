const ALLERGENS = [
  'cats',
  'pollen',
  'chocolate',
  'tomatoes',
  'strawberries',
  'shellfish',
  'peanuts',
  'eggs'
]

export default function(score) {
  this.score = score % 256;
  this.list = () => ALLERGENS.filter((allergen, i) => {
    let currentScore = 2**(7 - i);
    if (this.score === currentScore || currentScore < this.score) {
      this.score -= currentScore;
      return true;
    } else {
      return false;
    }
  }).reverse();
  this.allergicTo = allergen => this.list().includes(allergen);
}
