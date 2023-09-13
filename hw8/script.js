// Масив чисел від 1 до 500
let numsArr = [];
for (let i = 1; i <= 500; i++) {
    numsArr.push(i);
}

// Вивести на сторінку в один рядок через кому числа від 10 до 20.
let numbers10To20 = [];
for (let i = 10; i <= 20; i++) {
    numbers10To20.push(i);
}

// Вивести квадрати чисел від 10 до 20.
let squares10To20 = [];
for (let i = 10; i <= 20; i++) {
    squares10To20.push(i * i);
}

// Вивести таблицю множення на 7.
let multiplicationTable7 = [];
for (let i = 1; i <= 10; i++) {
    multiplicationTable7.push(`7 * ${i} = ${7 * i}`);
}

// Знайти суму всіх цілих чисел від 1 до 15.
let sum1To15 = 0;
for (let i = 1; i <= 15; i++) {
    sum1To15 += i;
}

// Знайти добуток усіх цілих чисел від 15 до 35.
let product15To35 = 1;
for (let i = 15; i <= 35; i++) {
    product15To35 *= i;
}

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let sum1To500 = 0;
for (let number of numsArr) {
    sum1To500 += number;
}
let average1To500 = sum1To500 / numsArr.length;

// Вивести суму лише парних чисел в діапазоні від 30 до 80.
let sumEven30To80 = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) sumEven30To80 += i;
}

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let multiplesOf3From100To200 = [];
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) multiplesOf3From100To200.push(i);
}

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// Для прикладу 16
let givenNumber = 16;
let divisors = [];
for (let i = 1; i <= givenNumber; i++) {
    if (givenNumber % i === 0) divisors.push(i);
}

// Визначити кількість його парних дільників.
let evenDivisorsCount = 0;
for (let i = 0; i < divisors.length; i++) {
    if (divisors[i] % 2 === 0) {
        evenDivisorsCount++;
    }
}

// Знайти суму його парних дільників.
let evenDivisorsSum = 0;
for (let divisor of divisors) {
    if (divisor % 2 === 0) {
        evenDivisorsSum += divisor;
    }
}

// Надрукувати повну таблицю множення від 1 до 10.
let fullMultiplicationTable = [];
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        fullMultiplicationTable.push(`${i} * ${j} = ${i * j}`);
    }
}

// Виводимо результати
const taskResult = document.querySelector('.loops');
taskResult.innerHTML = `
1. Вивести на сторінку в один рядок через кому числа від 10 до 20: ${numbers10To20.join(', ')}<br><br>
2. Вивести квадрати чисел від 10 до 20: ${squares10To20.join(', ')}<br><br>
3. Вивести таблицю множення на 7: <br> ${multiplicationTable7.join('<br>')}<br><br>
4. Знайти суму всіх цілих чисел від 1 до 15: ${sum1To15}<br><br>
5. Знайти добуток усіх цілих чисел від 15 до 35: ${product15To35}<br><br>
6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500: ${average1To500}<br><br>
7. Вивести суму лише парних чисел в діапазоні від 30 до 80: ${sumEven30To80}<br><br>
8. Вивести всі числа в діапазоні від 100 до 200 кратні 3: ${multiplesOf3From100To200.join(', ')}<br><br>
9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники (наприклад число ${givenNumber}): ${divisors.join(', ')}<br><br>
10. Визначити кількість його парних дільників: ${evenDivisorsCount}<br><br>
11. Знайти суму його парних дільників: ${evenDivisorsSum}<br><br>
12. Надрукувати повну таблицю множення від 1 до 10: <br>${fullMultiplicationTable.join('<br>')}`;