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

let maintainingDisplay = true;
const display = document.querySelector('.display');
const digitBtns = document.querySelectorAll('.digit');
digitBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // prevent concatenating with results, etc
        if(maintainingDisplay) {
            display.textContent = '';
            maintainingDisplay = false;
        }
        display.textContent += btn.textContent;
    });
});

 // this prevents the usual calculator behavior of just rapidly hitting the 
 // equals button to perform the same operation over again, but it works for now
 function clearVariables() {
    firstNum = undefined;
    secondNum = undefined;
    operator = undefined;
}

function executeEquals() {
    secondNum = parseInt(display.textContent);
    if(secondNum === 0 && operator === '/') {
        display.textContent = "You know that's not a thing. Don't break my calculator";
        clearVariables();
    } else {
        display.textContent = operate(operator, firstNum, secondNum);
    }
    maintainingDisplay = true;
}

const decimalBtn = document.querySelector('.decimal');
decimalBtn.addEventListener('click', () => {
    if(!display.textContent.includes('.')) {
        display.textContent += decimalBtn.textContent;
        // don't clear the starting 0, that's frustrating user experience
        maintainingDisplay = false;
    }
});

const operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if(firstNum) {
            executeEquals();
        }

        operator = btn.textContent;
        firstNum = parseInt(display.textContent);
        // maintain display until numbers are clicked again
        maintainingDisplay = true;
    });
});

const equalsBtn = document.querySelector('.equals');
equalsBtn.addEventListener('click', () => {
    executeEquals();
    // don't get caught by operatorBtn event that checks for firstNum
    clearVariables();
});

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    clearVariables();
    display.textContent = '0';
    maintainingDisplay = true;
});