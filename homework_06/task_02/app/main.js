let firstNum;
let secondNum;
let rndActionNum;

const mathExpDOMElem = document.querySelector('#math-expression');
const mathInputElem = document.querySelector('#math-expression-answer');
const actions = '+-*/';

function rndExpression(){
    rndActionNum = Math.floor(Math.random() * 4);

    const range = rndActionNum > 1 ? 28 : 90;
    const shift = rndActionNum > 1 ? 2 : 10;

    firstNum = Math.ceil(Math.random() * range) + shift;
    secondNum = Math.ceil(Math.random() * range) + shift;

    mathExpDOMElem.innerHTML = `${firstNum} ${actions[rndActionNum]} ${secondNum} = `;
}

function fourActions(first, second, action){
    switch(action){
        case 1 : return first + second;
        case 2 : return first - second;
        case 3 : return first * second;
        case 4 : return first / second;
    }
}

function checkExpression(){
    if (mathInputElem.value == fourActions(firstNum, secondNum, rndActionNum)){
        alert('Everything is correct');
        rndExpression();
    } else {
        alert('Try again!');
    }

    mathInputElem.value = '';
}

rndExpression();