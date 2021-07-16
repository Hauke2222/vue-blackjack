export default class Functions {
  //constructor() {}
  static checkForCardOf11Score(cards) {
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].value === 11) {
        return cards[i];
      }
    }
    return false;
  }

  static calculateScore(cards) {
    // console.log(cards);
    let score = 0;
    let ace;
    while (
      cards.reduce((acc, card) => acc + card.value, 0) > 21 &&
      Functions.checkForCardOf11Score(cards)
    ) {
      console.log("bezig met asen verlagen");
      ace = Functions.checkForCardOf11Score(cards);
      ace.value = 1;
    }

    console.log("calculateScore: " + score);
    return score;
  }
}
