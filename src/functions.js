export default class Functions {
  static checkForCardOf11Score(cards) {
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].value === 11) {
        return cards[i];
      }
    }
    return false;
  }

  static calculateScore(cards) {
    let score = 0;
    let ace;
    while (
      (score = cards.reduce((acc, card) => acc + card.value, 0)) > 21 &&
      Functions.checkForCardOf11Score(cards)
    ) {
      ace = Functions.checkForCardOf11Score(cards);
      ace.value = 1;
    }
    return score;
  }
}
