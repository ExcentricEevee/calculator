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
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '*':
            return multiply(x, y);
        case '/':
            return divide(x, y);
    }
}

let displayingResult = false;
const display = document.querySelector('.display');
const digitBtns = document.querySelectorAll('.digit');
digitBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if(displayingResult) {
            display.textContent = '';
            displayingResult = false;
        }
        display.textContent += btn.textContent;
    });
});

function executeEquals() {
    secondNum = parseInt(display.textContent);
    display.textContent = operate(operator, firstNum, secondNum);
    displayingResult = true;
}

 // this prevents just rapidly hitting the equals button to perform the same
 // operation over and over again, but it works for now
function clearVariables() {
    firstNum = undefined;
    secondNum = undefined;
    operator = undefined;
}

const operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if(firstNum) {
            executeEquals();
        }

        operator = btn.textContent;
        firstNum = parseInt(display.textContent);
        if(!displayingResult) {
            display.textContent = '';
        }
    });
});

const equalsBtn = document.querySelector('.equals');
equalsBtn.addEventListener('click', () => {
    executeEquals();
    // don't get caught by operatorBtn event that checks for firstNum
    clearVariables();
});