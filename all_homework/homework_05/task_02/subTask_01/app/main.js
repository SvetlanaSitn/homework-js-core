let number = prompt("Please, enter a two-digit number!");
const one = ["один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
const ten = ["двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];
const toTwenty = ["десять", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];

function numToWords(num){
    if (num > 0 && num <= 9){
        return one[num - 1];
    }
    if (num >= 10 && num < 20){
        return toTwenty[num - 10];
    }
    if (num >= 20 && num <= 99){
        let str = num;
        str = str.split('');
        let firstNum = str[0];
        let secondNum = str[1];
        return `${ten[firstNum - 2]} ${one[secondNum - 1]}`;
    }
}
alert(numToWords(number));