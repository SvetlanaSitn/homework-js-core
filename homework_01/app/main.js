//* * 1.
let userName = prompt("Please, enter your name!", "");
alert(`Hello, ${userName}!`);

//* * 2.
let userBirthYear = prompt("Please, enter your year of birth!", "");
const year = 2020;
/* 
let resYear = year - userBirthYear;
alert(`You're ${resYear} years old! Or you'll turn ${resYear} this year!`); 
*/
alert(`You're ${year - userBirthYear} years old! Or you'll turn ${year - userBirthYear} this year!`)

//* * 3.
let length = prompt("Please, enter side length of a square!", "");
alert(`Square perimeter is ${length * 4}!`);

//* * 4.
let radius = prompt("Please, enter the radius of the circle!", "");
alert(`The area of a circle is ${Math.PI * radius ** 2}!`);