class Beer {
  verse(bottles) {
    let beerOnTheWall = `${bottles || 'No more'} ${bottles === 1 ? 'bottle' : 'bottles'}`,
        passOrBuy = bottles === 0 ?
        `Go to the store and buy some more` :
        `Take ${bottles === 1 ? 'it' : 'one'} down and pass it around`,
        result = `${beerOnTheWall} of beer on the wall, ${beerOnTheWall.toLowerCase()} of beer.
${passOrBuy}, ${bottles ? bottles - 1 || 'no more' : '99'} ${bottles - 1 === 1 ? 'bottle' : 'bottles'} of beer on the wall.\n`;

    return result;
  }

  sing(startBottles = 99, endBottles = 0) {
    let verses = [];
    for (let i = startBottles; i >= endBottles; i--) {
      verses.push(this.verse(i));
    }

    return verses.join('\n');
  }
}

export default new Beer;
