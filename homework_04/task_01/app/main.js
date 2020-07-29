let chairs = [['xxx', 3], ['xxxxx', 6], ['xxxxxx', 9], ['xx', 8]];
let chairsNeed = +prompt("Needed chairs: ");

function findChair(arr, sitsNeed){
    if(sitsNeed === 0){
        return 'Game on!'
    }

    let allFreeChairs = 0;

    let nullSits = [];
    for (let i = 0; i < arr.length; i++){

        let freeChairs = arr[i][1] - arr[i][0].length;

        if(sitsNeed > 0){

            if(freeChairs > 0){
                allFreeChairs += freeChairs;

                if(sitsNeed > freeChairs){
                    nullSits.push(freeChairs);

                } else{
                    nullSits.push(sitsNeed);

                }
                sitsNeed -= freeChairs;
            } else{
                nullSits.push(0);
            }

        } else{
            return nullSits;
        }
    }

    if (sitsNeed > 0){
        return 'Not enough!';
    } else{
        return nullSits;
    }
}

let res = findChair(chairs, chairsNeed);
console.log('Result is => ', res);