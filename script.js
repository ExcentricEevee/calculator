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
        if (operator !== undefined) {
            /* process calculations in between each operator chain */
            /* this intentionally does NOT account for Order of Operations as per TOP guidelines */
            result = executeEquals();
            num1 = result;
        } else {
            num1 = parseInt(display.textContent);
        }

        operator = button.textContent;
        display.textContent = '';
    });
});

const equals = document.querySelector('button.equals');
equals.addEventListener('click', () => {
    display.textContent = executeEquals();
});

function executeEquals() {
    num2 = parseInt(display.textContent);
    return operate(num1, num2, operator);
}

/* function getDisplayValue() {
    typeof num1 === "number" ? num2 = parseInt(display.textContent) : num1 = parseInt(display.textContent);
} */

function operate(x, y, operator) {
    switch (operator) {
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
