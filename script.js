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

createCardsFromTechs(techs);
function createCardsFromTechs(techs) {
  let cards = [];

  for (let tech of techs) {
    cards.push(createPairFromTechs(tech));
  }
  console.log(cards);
}

function createPairFromTechs(tech) {
  return [
    { id: createIdWithTechs(tech), icon: tech, flipped: false },
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
