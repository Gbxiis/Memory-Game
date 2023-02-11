const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";
const ICON = 'icon'

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
  console.log(cards);

  initializeCards(cards);
}

function initializeCards(cards) {
  let gamerBoard = document.getElementById("gamerBoard");
  cards.forEach((card) => {
    let cardElement = document.createElement("div");
    cardElement.id = card.id;
    cardElement.classList.add(CARD);
    cardElement.dataset.icon = card.icon;

    cardElement.addEventListener("click", flipCard);
    gamerBoard.appendChild(cardElement);
    createCardContent(card, cardElement);
  });
}

function createCardContent(card, cardElement) {
  creatCardFace(FRONT,card,cardElement)
  creatCardFace(BACK,card,cardElement)
}

function creatCardFace(face,card,element){
  let cardElementFace = document.createElement('div');
  cardElementFace.classList.add(face);
  if(face === FRONT){
      let iconElement = document.createElement('img');
      iconElement.classList.add(ICON)
      iconElement.src = "./images/" + card.icon + ".png"
      cardElementFace.appendChild(iconElement);
  }else{
    cardElementFace.innerHTML = "&lt/&gt"
  }
  element.appendChild(cardElementFace);
}

function shuffleCards(cards) {
  let currentIdex = cards.length;
  let randomIndex = 0;

  while (currentIdex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIdex);
    currentIdex--;

    [cards[randomIndex], cards[currentIdex]] = [
      cards[currentIdex],
      cards[randomIndex],
    ];
  }
}

function createCardsFromTechs(techs) {
  let cards = [];

  techs.forEach((tech) => {
    cards.push(createPairFromTechs(tech));
  });
  return cards.flatMap((pair) => pair);
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

function flipCard() {}
