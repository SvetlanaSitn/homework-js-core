let userNum = +prompt("Please, enter your six-digit number of ticket: ");

if(userNum > 0 ){
    let first = Math.floor(userNum / 1000);
    let second = userNum % 1000;
    let firstSum = first % 10 + Math.floor(first / 10) % 10 + Math.floor(first / 100);
    let secondSum = second % 10 + Math.floor(second / 10) % 10 + Math.floor(second / 100);
    let msg = (firstSum === secondSum) ? 'Yes' : 'No';
    alert(`${msg}`);
} else{
    alert(`Invalid value.`);
}