//* * 1.
let userAge = prompt("Please, enter your age!", "");
switch (true) {
    case userAge >= 0 && userAge <= 12: {
        alert(`Child!`);
        break;
    }
    case userAge >= 13 && userAge <=18: {
        alert(`Adolescent!`);
        break;
    }
    case userAge >= 19 && userAge <= 60: {
        alert(`Adult!`);
        break;
    }
    case userAge >=61: {
        alert(`Senior citizen!`);
        break;
    }
} 
//* * 1. ver2
let userAge2 = prompt("Please, enter your age!", "");

let message = (userAge2 >= 0 && userAge2 <= 12) ? `Child!` :
(userAge2 >= 13 && userAge2 <=18) ? `Adolescent!` :
(userAge2 >= 19 && userAge2 <= 60) ? `Adult!` :
(userAge2 >=61) ? `Senior citizen!` :
`Another value...`;

alert(message);

//* * 2.
let userNum = prompt("Please, enter a number from 0 to 9!", "");
switch(true) {
    case userNum == 0:{
        alert(`)`);
        break;
    }
    case userNum == 1: {
        alert(`!`);
        break;
    }
    case userNum == 2:{
        alert(`@`);
        break;
    }
    case userNum == 3: {
        alert(`#`);
        break;
    }
    case userNum == 4:{
        alert(`$`);
        break;
    }
    case userNum == 5: {
        alert(`%`);
        break;
    }
    case userNum == 6:{
        alert(`^`);
        break;
    }
    case userNum == 7: {
        alert(`&`);
        break;
    }
    case userNum == 8:{
        alert(`*`);
        break;
    }
    case userNum == 9: {
        alert(`(`);
        break;
    }
}

//* * 3.
let userNumber = +prompt("Please, enter a three-digit number!");
if (userNumber > 99 && userNumber < 1000) {
    let digitFirst = parseInt(userNumber / 100);
    let digitSecond = parseInt(userNumber / 10) % 10;
    let digitThird = userNumber % 10;
    if(digitFirst === digitSecond || digitSecond === digitThird || digitFirst === digitThird) {
        alert('Same digits were found!');
    }
    else {
        alert('No identical digits!');
    }
} else {
    alert(`It isn't a three-digit number!`);
}

//* * 4.
let year = prompt("Please, enter a year!");
resFirst = year % 400; //if 0 -> leap year
resSecond = year % 4; 
resThird = year % 100;
if (resFirst == 0 || resSecond == 0 && resThird !== 0) {
    alert(`${year} is a leap year.`);
} else {
    alert(`${year} isn't a leap year.`)
}

//* *5.
let num = prompt("Please, enter 5-digit number!");
let numArray = num.split('');
if (numArray[0] === numArray[4] && numArray[1] === numArray[3]){
    alert(`It's a palindrome!`);
} else{
    alert(`It isn't a palindrome!`);
}

//* *6.
let userAmount = prompt("Please, enter amount of USD!");
let userCurrency = prompt("Select the currency: EUR, UAH, GBR.");

const rateEUR = 0.85;
const rateUAH = 27.70;
const rateGBR = 0.77;

let toEUR = userAmount * rateEUR;
let toUAH = userAmount * rateUAH;
let toGBR = userAmount * rateGBR;

switch(userCurrency) {
    case 'EUR' : alert(`${toEUR} EUR`);
    break;
    case 'UAH' : alert(`${toUAH} UAH`);
    break;
    case 'GBR' : alert(`${toGBR} GBR`);
    break;
    default : alert(`Wrong input.`);
}

//* *7.
let userSum = prompt ("Please, enter your purchase amount: ");

const disctThree = 0.03;
const disctFive = 0.05;
const disctSeven = 0.07;

let msg = "Invalid value.";

if (userSum > 200 && userSum < 300){
    msg = `Sum with discount: ${userSum - (userSum*disctThree)}`;
}
if (userSum >= 300 && userSum < 500){
    msg = `Sum with discount: ${userSum - (userSum*disctFive)}`;
}
if (userSum >= 500){
    msg = `Sum with discount: ${userSum - (userSum*disctSeven)}`;
}
alert(msg);

//* *8.
let circumference = prompt("Please, enter a circumference in sm: ");
let squarePerimeter = prompt("Please, enter perimeter of a square in sm: ");
const length = squarePerimeter / 4;
let radius = circumference / (2 * Math.PI);

if ((radius * 2) <= length){
    alert(`Circumference fits in a square!`);
} else{
    alert(`Circumference doesn't fit in a square!`);
}

//* *9.
let firstQuestion = prompt("Variable in JS declared with which of the following keyword? \n a) new; \n b) int; \n c) let;");
let scores = 0;

if (firstQuestion == "c"){
    scores += 2;
}

let secondQuestion = prompt("Which of the following object represent parameters of current function inside any function? \n a) arguments; \n b) this; \n c) Object;");
if (secondQuestion == "a"){
    scores += 2;
}

let thirdQuestion = prompt("What will 1 == \"1\" return? \n a) False; \n b) True; \n c) 0;");
if (thirdQuestion == "b"){
    scores += 2;
}

alert(`Scores: ${scores}`);

