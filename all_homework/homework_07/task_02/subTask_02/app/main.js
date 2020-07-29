function toAbbreviation(str){
    const words = str.trim().split(' ');
    const abb = words.reduce((string, elem) => {
        return string + elem[0].toUpperCase();
    }, '');
    return abb;
}
console.log(toAbbreviation('cascading style sheets'));