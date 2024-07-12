let display = document.getElementById('display');
let lastResult = '';
let usingAns = false;

function appendNumber(number) {
    if (usingAns) {
        display.value = '';
        usingAns = false;
    }
    display.value += number;
}

function appendOperator(operator) {
    if (usingAns) {
        display.value = 'ANS ' + operator + ' ';
        usingAns = false;
    } else {
        display.value += ' ' + operator + ' ';
    }
}

function appendPercent() {
    let currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value += '%';
    }
}

function appendPoint() {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function clearDisplay() {
    display.value = '';
    usingAns = false;
}

function backspace() {
    if (display.value.slice(-1) === ' ') {
        display.value = display.value.slice(0, -3);
    } else {
        display.value = display.value.slice(0, -1);
    }
}

function calculate() {
    try {
        let expression = display.value.replace(/ANS/g, lastResult);

        // Handling percentage calculation
        if (expression.includes('%')) {
            let parts = expression.split('%');
            let number = parseFloat(parts[0]);
            let result = number / 100;
            lastResult = result.toFixed(2); // Adjusted toFixed to display two decimal places
        } else {
            lastResult = eval(expression).toFixed(2); // Adjusted toFixed to display two decimal places
        }

        display.value = lastResult;
    } catch (e) {
        display.value = 'Error';
    }
    usingAns = true;
}

function appendAns() {
    display.value = 'ANS';
    usingAns = true;
}
