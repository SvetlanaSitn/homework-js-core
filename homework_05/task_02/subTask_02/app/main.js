let userStr = prompt("Please, enter a string to analyze!");
let findNums = /\d/;
let findLetters = /\w/;

function search(str){
    let numbers = 0;
    let letters = 0;
    let symbols = 0;

    for(let i = 0; i < str.length; i++){
        str[i].match(findNums) ? numbers++ :
        str[i].match(findLetters) ? letters++ : symbols++ ;
    }
    return (`Letters: ${letters}, numbers: ${numbers}, symbols: ${symbols}.`);
}

console.log(userStr, search(userStr));