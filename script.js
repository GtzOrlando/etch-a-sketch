const container = document.querySelector('#container');
const colorsID = document.querySelector('#colors');
const square = document.getElementsByClassName("square");
const activeColorBtn = document.getElementsByClassName("activeColor");
const squaresXY = document.getElementsByClassName("squaresXY");
const rainbow = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
const colors = ["black", "gray", "white", "brown", "purple", "violet","indigo", "blue", "green", "yellow", "orange", "red", rainbow];
let activeColor = colors[0];

for(let i = 10000; i != 0; i--) {
    var squareDIV = document.createElement('div');
    squareDIV.classList.add('square');
    squareDIV.onmouseover = function() {
        changeColor(this);
    };
    container.appendChild(squareDIV);
}

for(let i = 0; i != 12; i++) {
    var button = document.createElement('button');
    button.classList.add('color');
    button.style['background-color'] = colors[i];
    button.onclick = function() {
        activeColor = colors[i];
        activeColorBtn[0].style['background-color'] = activeColor;
        activeColorBtn[0].textContent = "";
    };
    colorsID.appendChild(button);
}

function changeColor(x) {
    if (activeColor == rainbow) {
        let z = rainbow[Math.floor(Math.random()*7)];
        x.style['background-color'] = z;
    } else {
        x.style['background-color'] = activeColor;
    }
}

function eraseAll() {
    for(let e = 0; e != 9999; e++) {
        square[e].style['background-color'] = "white";
    }
}

function rainbowMode() {
    activeColor = colors[12];
    activeColorBtn[0].style['background-color'] = "White";
    activeColorBtn[0].textContent = "RAINBOW";
}

function changeGrid() {
    let a = prompt("How many squares in X?", "max:100");
    let b = prompt("How many squares in Y?", "max:100");
    let c = a * b;
    let d = 600/a;
    let e = 600/b;

    eraseAll();

    for(let i = c; i != 9999; i++) {
        square[i].style['display'] = "none";
    }

    for(let i = 0; i != c; i++) {
        square[i].style['width'] = d + "px";
        square[i].style['height'] = e + "px";
    }
    squaresXY[0].textContent = a + "x" + b;
}