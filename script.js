const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";
const ICON = "icon";

startGame();
function startGame() {
  initializeCards(game.createCardsFromTechs());
}

function initializeCards(cards) {
  let gamerBoard = document.getElementById("gamerBoard");
  game.cards.forEach((card) => {
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
  creatCardFace(FRONT, card, cardElement);
  creatCardFace(BACK, card, cardElement);
}

function creatCardFace(face, card, element) {
  let cardElementFace = document.createElement("div");
  cardElementFace.classList.add(face);
  if (face === FRONT) {
    let iconElement = document.createElement("img");
    iconElement.classList.add(ICON);
    iconElement.src = "./images/" + card.icon + ".png";
    cardElementFace.appendChild(iconElement);
  } else {
    cardElementFace.innerHTML = "&lt/&gt";
  }
  element.appendChild(cardElementFace);
}

function flipCard() {
  if (game.setCard(this.id)) {
    this.classList.add("flip");
    if (game.checkMatch()) {
      game.clearCards();
      if(game.checkGameOver()){
        let gameOverLayer = document.getElementById("gamerOver");
        gameOverLayer.style.display = 'flex'
      }
    } else {
      setTimeout(() => {
        let firstCardView = document.getElementById(game.firstCard.id);
        let secondCardView = document.getElementById(game.secondCard.id);
        firstCardView.classList.remove("flip");
        secondCardView.classList.remove("flip");
        game.clearCards();
      },1000);
    }
  }
}
