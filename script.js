const FRONT = "card_front";
const BACK = "card-back";

let techs = [
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
];
let cards = null;
startGame();
function startGame() {
  let cards = createCardsFromTechs(techs);
  shuffleCards(cards);
  console.log(cards)
}

function shuffleCards(cards) {

  let currentIdex = cards.length;
  let randomIndex = 0;

  while (currentIdex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIdex)
    currentIdex--;

    [cards[randomIndex], cards[currentIdex]] = [cards[currentIdex], cards[randomIndex]]
  }
}

function createCardsFromTechs(techs) {
  let cards = [];

  for (let tech of techs) {
    cards.push(createPairFromTechs(tech));
  }
  return cards.flatMap((pair) => pair);
}

function createPairFromTechs(tech) {
  return [
    { id: createIdWithTechs(tech),
      icon: tech,
      flipped: false },
    {
      id: createIdWithTechs(tech),
      icon: tech,
      flipped: false,
    },
  ];
}

function createIdWithTechs(tech) {
  return tech + parseInt(Math.random() * 1000);
}
