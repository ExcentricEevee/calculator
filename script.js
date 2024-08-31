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

const display = document.querySelector('.display');
const digitBtns = document.querySelectorAll('.digit');
digitBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        display.textContent += btn.textContent;
    });
});

function executeEquals() {
    secondNum = parseInt(display.textContent);
    display.textContent = operate(operator, firstNum, secondNum);
    console.log(`executeEquals call\noperator: ${operator} | 1st: ${firstNum} | 2nd: ${secondNum}`);
}

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
        display.textContent = '';
        console.log(`operator event\noperator: ${operator} | 1st: ${firstNum} | 2nd: ${secondNum}`);
    });
});

const equalsBtn = document.querySelector('.equals');
equalsBtn.addEventListener('click', () => {
    executeEquals();
    // don't get caught by operatorBtn event that checks for firstNum
    clearVariables();
});