function listbtn() {
    list.classList.add("hidden");
    cross.classList.remove("hidden");

    menu.classList.remove("hidden");
    menu2.classList.remove("hidden");
}

function crossbtn() {
    list.classList.remove("hidden");
    cross.classList.add("hidden");

    menu.classList.add("hidden");
    menu2.classList.add("hidden");
}

var list = document.querySelector('.listbtn');
var cross = document.querySelector('.crossbtn');
var menu = document.querySelector('.menu');
var menu2 = document.querySelector('.menu2');

list.addEventListener('click', listbtn);
cross.addEventListener('click', crossbtn);