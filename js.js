"use strict";

let title = document.querySelector(".title");
let sqaure = document.querySelectorAll(".square");


sqaure.forEach(e => {
    e.addEventListener('mouseenter', el => {
        title.innerText = el.target.innerText      
        el.target.style.backgroundColor = '#c4c4c4';
        el.target.childNodes[0].style.backgroundColor = '#c4c4c4';
    })
});


sqaure.forEach(e => {
    e.addEventListener('mouseleave', el => {
        title.innerText = "Заголовок"
        el.target.style.backgroundColor = 'black';
        el.target.childNodes[0].style.backgroundColor = 'black';
    })
});