let measurements = prompt("Please, enter length, width and height: ");
let measureArray = measurements.split(',');

if (measureArray[0] <= 1000 && measureArray[1] <= 1000 && measureArray[2] <= 1000){
    let area = (2 * measureArray[0] + 2 * measureArray[1]) * measureArray[2];
    let amount = area / 16;
    alert(`${Math.round(amount)}`);
} else{
    alert(`Invalid value.`);
}