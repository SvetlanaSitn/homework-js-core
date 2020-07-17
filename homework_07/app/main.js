let modal = document.getElementById('modalWindow');


let btn = document.getElementById("open");


let input = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}


input.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}