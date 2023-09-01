let firstNum = prompt('Enter first number:');
let secondNum = prompt('Enter second number:');

if (firstNum === null || secondNum === null || firstNum.trim() === '' || secondNum.trim() === '') {
  alert('Please enter valid numbers');
} else {
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);
  if (isNaN(firstNum) || isNaN(secondNum)) {
    alert('Please enter valid numbers');
  } else {
    const tagResult = document.querySelector('.result');
    tagResult.innerHTML =
      `The user entered the values ${firstNum} and ${secondNum}:` + "<br>" +
      `${firstNum} + ${secondNum} = ${firstNum + secondNum}` + "<br>" +
      `${firstNum} - ${secondNum} = ${firstNum - secondNum}` + "<br>" +
      `${firstNum} * ${secondNum} = ${firstNum * secondNum}` + "<br>" +
      `${firstNum} / ${secondNum} = ${firstNum / secondNum}`;
  }
}