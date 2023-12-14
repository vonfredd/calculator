const buttons = document.querySelectorAll('button');
const inputField = document.querySelector('input');

let number = 0;
let sum = 0;
let combinator = '';
let stack = [];

const setOfId = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
const setOfOperand = new Set(['sub', 'add', 'multiply']);

inputField.value = '';

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        let theChosenOne = e.target;

        if (stack.includes('equals')) {
            inputField.value = '';
            stack.length = 0;
        }
        if (setOfId.has(theChosenOne.id)) {
            inputField.value += theChosenOne.innerText;
        } else if (theChosenOne.id === 'c') {
            reset();
            inputField.value = '';
        } else if (setOfOperand.has(theChosenOne.id)) {
            combinator = theChosenOne.id;
            sum = parseInt(inputField.value);
            inputField.value = '';

        } else if (theChosenOne.id === 'equals') {
            stack.push('equals');
            number = parseInt(inputField.value);
            calculateSum(combinator, sum, number);
            reset();
        }

    })
});

function calculateSum(combinator, sum, number) {
    switch (combinator) {
        case 'sub':
            inputField.value = sum - number;
            break;
        case 'add':
            inputField.value = sum + number;
            break;
        case 'multiply':
            inputField.value = sum * number;
            break;
    }
}

function reset() {
    combinator = '';
    sum = 0;
    number = 0;
}