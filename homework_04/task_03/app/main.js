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


let arrPush = ['pop', 'push', 'shift', 'unshift', 'concat'];
function funcPush(arrForPush) {
    arrForPush[arrForPush.length] = 'addedElement';
    console.log(arrForPush + ` <- new array(Push).`);
}
console.log(funcPush(arrPush));
//console.log(arrPush);

let arrShift = ['pop', 'push', 'shift', 'unshift', 'concat'];
function funcShift(arrForShift) {
    let newArr = [];
    newArr = arrForShift.splice(0,1);
    return newArr;
    //console.log(newArr);
}
console.log(funcShift(arrShift));