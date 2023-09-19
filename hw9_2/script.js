const lengthArr = Number(prompt("Введіть розмірність масиву arrA:"));
let arrA = new Array(lengthArr).fill(null).map(() => Math.floor(Math.random() * 100) + 1);

let arrB = arrA.filter(isSimpleNum);

function isSimpleNum(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  return true;
}

let minNum = Math.min(...arrB);
let maxNum = Math.max(...arrB);

const taskResult = document.querySelector('.loops-random');

taskResult.innerHTML = `
<h2>Масив arrA:</h2><p>${arrA}</p>
<h2>Прості числа з масиву arrA в масиві arrB:</h2><p>${arrB}</p>
<h2>Мінімальне число у масиві arrB:</h2><p>${minNum}</p>
<h2>Максимальне число у масиві arrB:</h2><p>${maxNum}</p>`;