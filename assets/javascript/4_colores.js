const blue = document.getElementById('divBlue');
const red = document.getElementById('divRed');
const green = document.getElementById('divGreen');
const yellow = document.getElementById('divYellow');

function cambiarBlue() {
    red.style.backgroundColor ='black';
}
    red.addEventListener("click",cambiarBlue);

function cambiarRed() {
    blue.style.backgroundColor ='black';
}
    blue.addEventListener("click",cambiarRed);

function cambiarGreen() {
    green.style.backgroundColor ='black';
}
    green.addEventListener("click",cambiarGreen);

function cambiarYellow() {
    yellow.style.backgroundColor ='black';
}
    yellow.addEventListener("click",cambiarYellow);



let colores1;
const key = document.getElementById('key')
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        colores1 = 'pink';
    }
    else if (event.key === 's') {
        colores1 = 'orange';
    }
    else if (event.key === 'd') {
        colores1 = 'skyblue';
    }
    key.style.backgroundColor = colores1
})


let colores2;
const key1 = document.getElementById('key1')
document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
        colores2 = 'yellow';
    }
    else if (event.key === 'w') {
        colores2 = 'blue';
    }
    else if (event.key === 'e') {
        colores2 = 'brown';
    }
    key1.style.backgroundColor = colores2
})