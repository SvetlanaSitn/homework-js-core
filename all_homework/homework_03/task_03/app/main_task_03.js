//let str = "I want to travel the world writing code one day";

function shortestWord(str) {
    let arrStr = str.split(" ");
    let minLength = Infinity;
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i].length < minLength) {
            minLength = arrStr[i].length;
        }
    }
    return minLength;
}

console.log(shortestWord("Bitcoin take over the world maybe who knows perhaps"));