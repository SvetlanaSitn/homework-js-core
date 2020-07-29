const strToConvertCase = prompt("Please, enter a string to convert!");

function convertCase(convertStr){
    return convertStr.split('').map(el => {
        if (!isNaN(+el) && el != ' '){
            return '_';
        }

        const lower = el.toLowerCase();
        const upper = el.toUpperCase();

        if(lower !== upper){
            return el === lower ? upper : lower;
        }

        return el;
    }).join('');
}

const res = convertCase(strToConvertCase);
alert(res);