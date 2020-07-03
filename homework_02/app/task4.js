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
if (resFirst == 0) {
    alert(`${year} is a leap year.`);
} else if (resSecond == 0 && resThird !== 0) {
    alert(`${year} is a leap year.`);
} else {
    alert(`${year} isn't a leap year.`)
}
