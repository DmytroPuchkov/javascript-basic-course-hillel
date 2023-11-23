class Card {
  constructor(title, imageUrl, power, protection, block) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.power = power;
    this.protection = protection;
    this.block = block;
  }
}

const heroCards = [];
const enemyCards = [];

let IMAGES = [];
let CARD_NAMES = [];

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    IMAGES = data.IMAGES;
    CARD_NAMES = data.CARD_NAMES;
  })
  .catch(error => console.error('Помилка завантаження JSON:', error));

const getRandomNumber = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

const renderCard = card => {
  const cardTemplate = `
    <div class="card">
      <div class="card-header">
        <h1 class="card-title">${card.title}</h1>
      </div>
      <div class="card-image">
        <img class="card-illustration" src="${card.imageUrl}" alt="${card.title}">
      </div>
      <div class="card-stats">
        <div class="card-stat">
          <p class="stat-name">Сила</p>
          <span class="stat-value">${card.power}</span>
        </div>
        <div class="card-stat">
          <p class="stat-name">Захист</p>
          <span class="stat-value">${card.protection}</span>
        </div>
        <div class="card-stat">
          <p class="stat-name">Блок</p>
          <span class="stat-value">${card.block}</span>
        </div>
      </div>
    </div>
  `;

  const templateElement = document.createElement('template');
  templateElement.innerHTML = cardTemplate.trim();

  return templateElement.content.firstChild;
}

const generateCard = () => {
  const title = CARD_NAMES[getRandomNumber(0, CARD_NAMES.length - 1)];
  const imageUrl = `./img/${IMAGES[getRandomNumber(0, IMAGES.length - 1)]}.jpg`;
  const power = getRandomNumber(1, 10);
  const protection = getRandomNumber(1, 10);
  const block = getRandomNumber(0, 5);

  return new Card(title, imageUrl, power, protection, block);
}

document.querySelector('.btn-hero').addEventListener('click', () => {
  if (heroCards.length >= 5) {
    alert("У вас повна колода!");
    return;
  }

  for (let i = 0; i < 5; i++) {
    const card = generateCard();
    heroCards.push(card);
    const heroCardsContainer = document.querySelector('.hero-cards');
    heroCardsContainer.appendChild(renderCard(card));
  }

  console.log(`Hero cards:`, heroCards);
});

document.querySelector('.btn-enemy').addEventListener('click', () => {
  if (enemyCards.length >= 5) {
    alert("У суперника повна колода!");
    return;
  }

  for (let i = 0; i < 5; i++) {
    const card = generateCard();
    enemyCards.push(card);
    const enemyCardsContainer = document.querySelector('.enemy-cards');
    enemyCardsContainer.appendChild(renderCard(card));
  }

  console.log(`Enemy cards:`, enemyCards);
});

document.addEventListener('click', (e) => {
  const cardElement = e.target.closest('.card');

  if (cardElement && cardElement.closest('.hero-cards')) {
    if (document.querySelector('.card.selected-hero-card')) {
      alert("Картка вже на полі бою!");
      return;
    }
    cardElement.classList.add('selected-hero-card');
  } else if (cardElement && cardElement.closest('.enemy-cards')) {
    if (document.querySelector('.card.selected-enemy-card')) {
      alert("Картка вже на полі бою!");
      return;
    }
    cardElement.classList.add('selected-enemy-card');
  }

  const divsInsideEnemyCards = document.querySelectorAll('.enemy-cards > div');
  divsInsideEnemyCards.forEach(div => {
    if (div.classList.contains('selected-enemy-card')) {
      div.classList.remove('cover');
    } else {
      div.classList.add('cover');
    }
  });
});

function resolveWinnerAndLoser() {
  const enemyCardElement = document.querySelector('.card.selected-enemy-card');
  const heroCardElement = document.querySelector('.card.selected-hero-card');

  if (!enemyCardElement || !heroCardElement) {
    alert("Оберіть картки для бою!");
    return;
  }

  function getCardObject(cardElement, cardsArray) {
    const cardTitle = cardElement.querySelector('.card-title').innerText;
    return cardsArray.find(card => card.title === cardTitle);
  }

  const enemyCard = getCardObject(enemyCardElement, enemyCards);
  const heroCard = getCardObject(heroCardElement, heroCards);

  const enemyLife = (enemyCard.protection + enemyCard.block) - heroCard.power;
  const heroLife = (heroCard.protection + heroCard.block) - enemyCard.power;

  if (enemyLife <= 0 && heroLife <= 0 || heroLife === enemyLife) {
    enemyCardElement.classList.add('lose');
    heroCardElement.classList.add('lose');
  } else if (enemyLife < heroLife) {
    enemyCardElement.classList.add('lose');
  } else {
    heroCardElement.classList.add('lose');
  }

  function displayLife(cardElement, life) {
    const cardImage = cardElement.querySelector('.card-image');
    if (cardImage) {
      const lifeCounter = document.createElement('div');
      lifeCounter.className = 'card-life-counter';
      lifeCounter.innerText = life;
      cardImage.prepend(lifeCounter);
      setTimeout(() => {
        lifeCounter.remove();
      }, 1000);
    }
  }

  displayLife(enemyCardElement, enemyLife);
  displayLife(heroCardElement, heroLife);

  function displayLog() {
    const logContainer = document.querySelector('.info-log');
    const logMessage = document.createElement('div');
    const currentDate = new Date();

    logMessage.classList.add('log-message');
    logMessage.innerHTML = `
      <span class="log-date">${currentDate.toLocaleTimeString()}</span>
      <span class="hero-color">${heroCard.title}, с:${heroCard.power}, зп:${heroCard.protection + heroCard.block} зж:${heroLife}</span> 
      <span class="enemy-color">${enemyCard.title}, с:${enemyCard.power}, зп:${enemyCard.protection + enemyCard.block}, зж:${enemyLife}</span>
    `;
    logContainer.prepend(logMessage);
  }

  function checkLoseDeck() {
    const enemyCardsDeck = document.querySelector('.enemy-cards');
    const heroCardsDeck = document.querySelector('.hero-cards');

    const loseMessage = document.createElement('h2');
    loseMessage.innerText = "Програв!";

    const restartButton = document.querySelector('.btn-restart');

    if (enemyCardsDeck && !enemyCardsDeck.hasChildNodes()) {
      enemyCardsDeck.appendChild(loseMessage);
      restartButton.classList.remove('hidden');
    } else if (heroCardsDeck && !heroCardsDeck.hasChildNodes()) {
      heroCardsDeck.appendChild(loseMessage);
      restartButton.classList.remove('hidden');
    }

    restartButton.addEventListener('click', () => {
      location.reload();
    });
  }

  setTimeout(() => {
    const loseElements = document.querySelectorAll('.lose');
    loseElements.forEach(element => {
      element.remove();
    });
    checkLoseDeck();
  }, 1500);

  displayLog();
}

document.querySelector('.btn-fight').addEventListener('click', () => {
  resolveWinnerAndLoser();
});

document.querySelector('.btn-start').addEventListener('click', () => {
  const introElement = document.querySelector('.intro');
  introElement.style.display = 'none';
});