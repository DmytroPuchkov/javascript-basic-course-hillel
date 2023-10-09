const colors = [
  "mediumslateblue",
  "blueviolet",
  "darkorchid",
  "darkviolet",
  "mediumorchid",
  "mediumpurple",
  "orchid",
  "plum",
  "purple",
  "thistle",
  "violet",
  "rebeccapurple"
];

const block = document.querySelector('.block');

function changeColor() {
  function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  block.style.background = getRandom(colors);
}

function moveBlock() {
  const maxLeft = window.innerWidth - block.offsetWidth;
  const maxTop = window.innerHeight - block.offsetHeight;
  block.style.left = Math.floor(Math.random() * maxLeft) + 'px';
  block.style.top = Math.floor(Math.random() * maxTop) + 'px';
}

setInterval(changeColor, 500);
setInterval(moveBlock, 1000);
