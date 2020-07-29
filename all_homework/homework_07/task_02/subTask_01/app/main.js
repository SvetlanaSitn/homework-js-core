let userStr = prompt("Enter your string: ");
function toCamelCase(str){
    let words = str.split(' ');
    let line = words.reduce((firstEl, secondEl) => {
        let firstChar = secondEl[0].toUpperCase();
        let newStr = secondEl.replace(secondEl[0], firstChar);
        return firstEl + newStr;
    });
    return line;
}
alert(toCamelCase(userStr));