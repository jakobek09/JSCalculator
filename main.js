const current = document.querySelector('.currentNumber');
const previous = document.querySelector('.previousNumber');
const mathSign = document.querySelector('.mathSign');
const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equals');
const clrBtn = document.querySelectorAll('.clear');
const signS = document.querySelector('.sign');
let check = '';

let res = '';

function numberClicked() {
    if(check !== '')
    {
        current.innerHTML = '';
        check = '';
    }
    if (this.textContent === '.' && current.innerHTML.includes('.')) return;
    if (this.textContent === '.' && current.innerHTML === '') {
        return (current.innerHTML = '0.');
    }

    current.innerHTML += this.textContent;
    
}

function operate() {
    

    if (mathSign.innerHTML !== '') {
        showResult();
    }
    previous.innerHTML = current.innerHTML;
    mathSign.innerHTML = this.textContent;
    current.innerHTML = '';
}

function showResult() {
    if(previous.innerHTML === '' || current.innerHTML === '') return;
    let a = Number(current.innerHTML);
    let b = Number(previous.innerHTML);
    let operator = mathSign.innerHTML;

    switch(operator) {
        case '+':
        result = a + b;
        break;
        case '-':
        result = b - a;
        break;
        case '*':
        result = a * b;
        break;
        case '/':
        result = b / a;
        break;
    }

    current.innerHTML = result;
    previous.innerHTML = `${b} ${operator} ${a} =`;
    mathSign.innerHTML = '';
    check = 1;
}

function clrScr() {
    if(this.textContent === 'C')
    {
        let currentText = current.innerHTML;
        let newCurrentText = currentText.slice(0, -1);
        current.innerHTML = newCurrentText;
    }
    else
        current.innerHTML = '';
}

function signChange()
{
    if (this.textContent === '+/-' && current.innerHTML === '') return;
    else if (this.textContent === '+/-') {
        if (current.innerHTML.charAt(0) === '-') {
            let currentText = current.innerHTML;
            let newCurrentText = currentText.substring(1);
            current.innerHTML = newCurrentText;
        } else {
            let currentText = current.innerHTML;
            current.innerHTML = '-' + currentText;
        }
    }
    previous.innerHTML = '';
}


clrBtn.forEach((button) => button.addEventListener('click', clrScr));

numberBtn.forEach((button) => button.addEventListener('click', numberClicked));

operatorBtn.forEach((button) => button.addEventListener('click', operate));

equalBtn.addEventListener('click', showResult);

signS.addEventListener('click', signChange);
