let questions = [
    {question: 'Скільки буде 2+2?', answer: '4'},
    {question: 'Сонце встає на сході?', answer: true},
    {question: 'Скільки буде 5 / 0?', answer: 'infinity'},
    {question: 'Який колір неба?', answer: 'блакитний'},
    {question: 'Яка правильна відповідь на головне питання життя, всесвіту і всього такого?', answer: '42'}
];

let value = 0;

for (let i = 0; i < questions.length; i++) {
    let userAnswer;

    if (typeof questions[i].answer === 'boolean') {
        userAnswer = confirm(questions[i].question);
    } else {
        userAnswer = prompt(questions[i].question).toLowerCase();
    }

    if (userAnswer === questions[i].answer) {
        value += 10;
    }
}

alert('Ваш результат: ' + value + ' очок.');