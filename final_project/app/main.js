const toSplit = () => {
    let sum = parseInt(document.querySelector('#sum').value);
    let persons = parseInt(document.querySelector('#persons').value);
    let tips = document.querySelector('#tips');

    if (tips.value !== "") {
        let tipsPercent = parseInt(tips.value);
        const totalWithTip = sum + (tipsPercent * sum) / 100;
        document.querySelector('#forEach').innerHTML = (totalWithTip / persons).toFixed(2);
    }
    else {
        const res = sum / persons;
        document.querySelector('#forEach').innerHTML = res.toFixed(2);
    }
}

document.querySelector('#addTip').addEventListener('click', (e) => {
    e.preventDefault();
    showTipInput();
})

const showTipInput = () => {
    const tipBtns = document.querySelector('#addTips')
    if (tipBtns.style.display === "block") {
        tipBtns.style.display = "none";
    }
    tipBtns.style.display = "block";
}


const splitBtn = document.querySelector('#splitBtn');
splitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toSplit();
})

document.querySelector('#resetBtn').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('form').reset();
    document.querySelector('#forEach').innerHTML = "0";
})