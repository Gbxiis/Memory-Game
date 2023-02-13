let game = {
  techs: [
    "bootstrap",
    "css",
    "electron",
    "firebase",
    "html",
    "javascript",
    "jquery",
    "mongo",
    "node",
    "react",
  ],
  cards: null,

  createCardsFromTechs: function () {
    this.cards = [];

    this.techs.forEach((tech) => {
      this.cards.push(this.createPairFromTechs(tech));
    });
    this.cards = this.cards.flatMap((pair) => pair);
    this.shuffleCards();
  },
  createPairFromTechs: function (tech) {
    return [
      { id: this.createIdWithTechs(tech), icon: tech, flipped: false },
      {
        id: this.createIdWithTechs(tech),
        icon: tech,
        flipped: false,
      },
    ];
  },

  createIdWithTechs: function (tech) {
    return tech + parseInt(Math.random() * 1000);
  },
  shuffleCards: function (cards) {
    let currentIdex = this.cards.length;
    let randomIndex = 0;

    while (currentIdex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIdex);
      currentIdex--;

      [this.cards[randomIndex], this.cards[currentIdex]] = [
        this.cards[currentIdex],
        this.cards[randomIndex],
      ];
    }
  },
};
