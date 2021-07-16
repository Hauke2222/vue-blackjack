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
    let score;

    while (
      (score = cards.reduce((acc, card) => acc + card.value, 0)) > 21 &&
      Functions.checkForCardOf11Score(cards)
    ) {
      Functions.checkForCardOf11Score(cards).value = 1;
    }

    return score;
  }
}
