let a;
do {
  a = Number(prompt("Enter the number a:"));
} while (isNaN(a));

let b;
do {
  b = Number(prompt("Enter the number b (greater than a):"));
} while (isNaN(b) || b <= a);

let h;
do {
  h = Number(prompt("Enter the step value h (greater than 0):"));
} while (isNaN(h) || h <= 0);

let factorialsSum = 0;

for (let i = a; i <= b; i += h) {
  let factorialValue = 1;
  for (let j = 1; j <= i; j++) {
    factorialValue *= j;
  }
  factorialsSum += factorialValue;
}

const tagResult = document.querySelector('.factorials');
tagResult.innerHTML = `The factorials sum for numbers ${a} to ${b} in steps of ${h} is ${factorialsSum}`;
