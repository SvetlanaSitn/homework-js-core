const inputUser = document.querySelector('.input');
const reDig = /\d/;

inputUser.oninput = function(ev){
    const reDig = /\d/g;
    console.log(ev, inputUser.value);
    inputUser.value = inputUser.value.replace(reDig, '');
}