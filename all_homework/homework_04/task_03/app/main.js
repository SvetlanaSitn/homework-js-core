//pop
let arrPop = ['pop', 'push', 'shift', 'unshift', 'concat'];
function funcPop(arrForPop) {
    let temp = arrForPop[arrForPop.length - 1];
    arrForPop.length = Math.max(0, arrForPop.length - 1); 
    return temp;

    /*  with splice
    * arrForPop.splice(arrForPop.length - 1);
    * console.log(arrForPop); 
    */

}
console.log(funcPop(arrPop) + ` is a removed element.`);
console.log(arrPop + ` <- new array(Pop).`);

//push
let arrPush = ['pop', 'push', 'shift', 'unshift', 'concat'];
function funcPush(arrForPush) {
    arrForPush[arrForPush.length] = 'addedElement';
    console.log(arrForPush + ` <- new array(Push).`);
}
console.log(funcPush(arrPush));
//console.log(arrPush);

//shift
let arrShift = ['pop', 'push', 'shift', 'unshift', 'concat'];
function funcShift(arrForShift) {
    let newArr = [];
    newArr = arrForShift.splice(0,1);
    return newArr;
    //console.log(newArr);
}
console.log(funcShift(arrShift));

//concat
function arrConcat(firstArray, secondArray){
    const firstArrLength = firstArray.length;
    const secondArrLength = secondArray.length;
    for(let i = 0; i < secondArrLength; i++){
        firstArray[i + firstArrLength] = secondArray[i];
    }
    return firstArray;
}
let arr = [1, 2, 3];
console.log(arrConcat(arr, [4, 5, 6, ,7, 8, 9]));

//unshift
function arrUnshift (someArr){
    const len = someArr.length - 1;
    let resArr = new Array(len);
    for(let i = 0; i < len; i++){
        resArr[i] = someArr[i+1];
    }
    return resArr;
}
let arrUS = [4, 5, 6];
console.log(arrUnshift(arrUS));
