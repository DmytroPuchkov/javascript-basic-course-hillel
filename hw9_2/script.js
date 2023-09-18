const lengthArr = Number(prompt("Введіть розмірність масиву arrA:"));
let arrA = [...new Array(length)];

for (let i = 0; i < lengthArr; i++) {
  arrA[i] = Math.floor(Math.random() * 100) + 1;
}

let arrB = [];
for (let i = 0; i < arrA.length; i++) {
  let isSimpleNum = true;

  for (let j = 2; j < arrA[i]; j++) {
    if (arrA[i] % j === 0) {
      isSimpleNum = false;
      break;
    }
  }

  if (isSimpleNum) {
    arrB.push(arrA[i]);
  }
}

let minNum = arrB[0];
let maxNum = arrB[0];

for (let i = 1; i < arrB.length; i++) {
  if (arrB[i] < minNum) {
    minNum = arrB[i];
  }
  if (arrB[i] > maxNum) {
    maxNum = arrB[i];
  }
}

const taskResult = document.querySelector('.loops-random');

taskResult.innerHTML = `
<h2>Масив arrA:</h2><p>${arrA}</p>
<h2>Прості числа з масиву arrA в масиві arrB:</h2><p>${arrB}</p>
<h2>Мінімальне число у масиві arrB:</h2><p>${minNum}</p>
<h2>Максимальне число у масиві arrB:</h2><p>${maxNum}</p>`;