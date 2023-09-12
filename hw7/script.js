let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let color = ['spades', 'clubs', 'diamonds', 'hearts'];

let cardsWrapper = document.querySelector('.wrapper');

for (let i = 0; i < values.length; i++) {
  for (let j = 0; j < color.length; j++) {
    
    let cardSrc = '';
    
    if (values[i] === 'J') {
      cardSrc = 'jack.svg';
    } else if (values[i] === 'Q') {
      cardSrc = 'queen.svg';
    } else if (values[i] === 'K') {
      cardSrc = 'king.svg';
    }

    if (values[i] === 'J' || values[i] === 'Q' || values[i] === 'K') {
      cardsWrapper.innerHTML += `
            <div class="card card--person">
                <div class="card__info">${values[i]}<img src="images/${color[j]}.svg" alt="${color[j]}"></div>
                <img class="person" src="images/${cardSrc}" alt="${color[j]}">
                <div class="card__info">${values[i]}<img src="images/${color[j]}.svg" alt="${color[j]}"></div>
            </div>`;
    } else {
      cardsWrapper.innerHTML += `
            <div class="card">
                <div class="card__info">${values[i]}<img src="images/${color[j]}.svg" alt="${color[j]}"></div>
                <div class="card__info">${values[i]}<img src="images/${color[j]}.svg" alt="${color[j]}"></div>
            </div>`;
    }
  }
}