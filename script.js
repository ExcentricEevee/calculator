let num1, operator, num2;
let numberCaptured = false;
const display = document.querySelector('.display');

/* Populate display with numbers */
const numButtons = document.querySelectorAll('button.number');
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        /* check if an operator recently assigned a num from the display */
        if (numberCaptured) {
            display.textContent = button.textContent;
            numberCaptured = false;
        } else {
            display.textContent += button.textContent;
        }
    });
});

/* Obtain op string and assign display value */
const opButtons = document.querySelectorAll('button.operator');
opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (operator !== undefined) {
            /* process calculations in between each operator chain */
            /* this intentionally does NOT account for Order of Operations as per TOP guidelines */
            updateDisplay();
        } else {
            num1 = parseInt(display.textContent);
        }

        numberCaptured = true;
        operator = button.textContent;
    });
});

const equals = document.querySelector('button.equals');
equals.addEventListener('click', () => {
    updateDisplay();
    operator = undefined;
});

function executeEquals() {
    num2 = parseInt(display.textContent);
    numberCaptured = true;
    return operate(num1, num2, operator);
}

function updateDisplay() {
    result = executeEquals();
    num1 = result;
    display.textContent = result;
}

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
