let firstNum = Number(prompt("Enter first number:"));
let secondNum = Number(prompt("Enter second number:"));
let thirdNum = Number(prompt("Enter third number:"));

if (isNaN(firstNum) || isNaN(secondNum) || isNaN(thirdNum)) {
  alert("Please enter the correct numbers");
} else {
  let averageNums = (firstNum + secondNum + thirdNum) / 3;
  alert(`The average of the entered numbers ${firstNum}, ${secondNum} and ${thirdNum} is ` + averageNums);
}