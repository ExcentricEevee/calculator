let num1, operator, num2;
const display = document.querySelector('.display');

/* Populate display with numbers */
const numButtons = document.querySelectorAll('button.number');
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    });
});

/* Obtain op string and assign display value */
const opButtons = document.querySelectorAll('button.operator');
opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        operator = button.textContent;
        getDisplayValue();
        display.textContent = '';
    });
});

const equals = document.querySelector('button.equals');
equals.addEventListener('click', () => {
    getDisplayValue();
    display.textContent = operate(num1, num2, operator);
});

function getDisplayValue() {
    typeof num1 === "number" ? num2 = parseInt(display.textContent) : num1 = parseInt(display.textContent);
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