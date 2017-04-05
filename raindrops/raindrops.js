const CONVERSIONS = {
  3: 'Pling', 5: 'Plang', 7: 'Plong'
}

export default () => ({
  convert: (num) => {
    return Object.entries(CONVERSIONS).map(([val, sound]) => {
      if (num % val === 0) return sound;
    }).join('') || '' + num;
  }
})
