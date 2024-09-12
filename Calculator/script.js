let display = document.getElementById('display');

function appendNumber(number) {
    display.innerText += number;
}

function appendOperator(operator) {
    display.innerText += ' ' + operator + ' ';
}

function clearDisplay() {
    display.innerText = '';
}

function calculate() {
    try {
        let result = eval(display.innerText);
        display.innerText = result;
    } catch (e) {
        display.innerText = 'Error';
    }
}
