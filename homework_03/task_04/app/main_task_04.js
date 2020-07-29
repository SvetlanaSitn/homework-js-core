function toSortStr(str){
    let inputStrArray = str.split(' ');
    let strArrayToString = [];

    for(let i = 0; i < inputStrArray.length; i++){
        for (let j = 0; j < inputStrArray[i].length; j++){
            const number = +inputStrArray[i][j];
            if (!isNaN(number)){
                strArrayToString[number] = inputStrArray[i];
                break;
            }
        }
    }
    return strArrayToString.join(' ');
}

console.log(toSortStr('4of Fo1r pe6ople g3ood th5e the2'));