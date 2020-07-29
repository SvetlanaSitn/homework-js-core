let sandTypes = new Array(3);
let containers = new Array(3);
let income = 0;

for (let i = 0; i < sandTypes.length; i++){
    sandTypes[i] = userValues();
}
for (let i = 0; i < containers.length; i++){
    containers[i] = userValues();
}

sandTypes.sort((a, b) => a-b);
containers.sort((a, b) => a-b);

for (let i = 0; i < 3; i++){
    income += containers[i] * sandTypes[i];
}

alert(income + ` $`);

function userValues(){
    let input;
    while(!input){
        let tempValue = +prompt(`Please, enter a number: `);
        if ((!isNaN(tempValue)) && (tempValue < 100) && (tempValue > 0)){
            input = tempValue;
            return input;
        } else{
            alert(`Invalid value.`);
        }
    }
}