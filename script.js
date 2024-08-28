function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

// use these to update UI display
let firstNum;
let secondNum;
let operator;

function operate(operator, x, y) {
    switch(operator) {
        case '+':
            add(x, y);
            break;
        case '-':
            subtract(x, y);
            break;
        case '*':
            multiply(x, y);
            break;
        case '/':
            divide(x, y);
            break;
    }
}

const display = document.querySelector('.display');
const digitButtons = document.querySelectorAll('.digit');
digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    });
});
