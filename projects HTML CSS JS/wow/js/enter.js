"use strict";

function holdMenu() {
    let menu = document.querySelector('nav');
    let iconB = document.querySelector('.iconBurger');
    if (menu.classList.contains('hide')){
        menu.classList.remove("hide");
    }
    else {
        menu.classList.add("hide");

    }
    if (iconB.classList.contains('hide')){
        iconB.classList.remove("hide");
    }
    else {
        iconB.classList.add("hide");
    }
}



