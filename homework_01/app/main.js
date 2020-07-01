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

//* * 5.
let distanceToGet = prompt("Please, enter distance in km between two cities!", "");
let hoursToGet = prompt("Please, enter expected time in hours!", "");
alert(`Your necessary speed to get on time is about ${Math.round(distanceToGet / hoursToGet)} km/h.`); //? округление до ближайшего целого

//* * 6.
let usd = prompt("Please, enter the values of the USD!", "");
const price = 0.89;
alert(`${usd} USD = ${usd * price} EUR`);

//* * 7.
let flashDriveVolume = prompt("Please, enter your flash drive volume in GB!", "");
let fileSize = 820;
alert(`Your flash drive can fit ${Math.floor(flashDriveVolume * 1024 / fileSize)} files of size 820 MB!`);

//* * 8.
let usersCash = prompt("Please, enter your amount of money!", "");
let chocoPrice = prompt("The price of one chocolate bar: ", "");
let res = usersCash % chocoPrice;
if (Math.floor(usersCash / chocoPrice) == 1) 
{
    res = res.toFixed(1);
    alert(`You may buy only one bar of chocolate with these. And here's your change: ${res}.`);
}
else if (Math.floor(usersCash / chocoPrice) > 1)
{
    res = res.toFixed(1);
    alert(`You may buy ${Math.floor(usersCash / chocoPrice)} bars of chocolate with these. And here's your change: ${res}.`);
}
else
{
    alert(`Not enough cash.`);
}

//* * 9.
let userNum = +prompt("Please, enter three-digit number!", "");
let resNum = 0;
if (Number.isInteger(userNum) && userNum == 3) 
{ 
    while (userNum > 0) 
    {
        resNum = resNum * 10 + userNum % 10;
        userNum = Math.floor(userNum / 10);
    }
    alert(`Number backwards is ${resNum}.`);
}
else
{
    alert(`It isn't a three-digit number!`);
}
