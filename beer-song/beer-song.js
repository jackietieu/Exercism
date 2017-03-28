class Beer {
  verse(bottles) {
    result = '';

    if (bottles > 0) {
      result = `${bottles} bottles of beer on the wall, ${bottles} bottles of beer.
      Take ${bottles === 1 ? 'it' : 'one'} down and pass it around, ${bottles - 1} bottles of beer on the wall.`;
    } else {
      result = `No more bottles of beer on the wall, no more bottles of beer.
      Go to the store and buy some more, 99 bottles of beer on the wall.`;
    }

    return result;
  }

  sing(startBottles = 99, endBottles = 0) {
    for (let i = startBottles; i >= endBottles; i--) {
      this.verse(i);
    }
  }
}



module.exports = Beer;
