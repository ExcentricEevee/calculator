let num1, operator, num2;
const display = document.querySelector('.display');
const result = document.querySelector('.result');

/* Populate display with numbers */
const numButtons = document.querySelectorAll('button.number');
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    });
});

function getDisplayValue() {
    typeof num1 === "integer" ? num2 = parseInt(display.textContent) : num1 = parseInt(display.textContent);
}

function operate(x, y, operator) {
    switch(operator) {
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "*":
            return multiply(x, y);
        case "/":
            return divide(x, y);
    }
}

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