"use strict";

document.cookie = 'WaAwsde_03849_Rl05';
console.log(document.cookie);
console.log(localStorage);


let infoUser = '{ "name": "Kail", "age": "3000", "status": "stealth"}';
infoUser = JSON.parse(infoUser);
console.log(infoUser);

// let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
// user = JSON.parse(user);


function buttonClick() {
  let text = selectText();
  console.log(text);
  clearInput();
  if (text === 'Hello') {
    let inputName = prompt('Как тебя зовут?')
    alert(`Привет, ${inputName}!`);
  }
  else if (text === 'xxx') {
    alert(`
      ░░░▄▄▄▓▀▀░░░░░░░▒▒▒▀▀▀█▄░
      ░░▐█░▄▀░░░░░░░░░░░░░▀▄░░█▌
      ░░▐░▐░░░░░░░░░░░░░░░░░▐░░▌
      ░░▐▐░░░░░░░▀▄▒▄▀░░░░░░░▐░░▌
      ░░▐▐░░░░░░░▒▒▐▒▒░░░░░░░▐░░▌
      ░░▐▐░░░▄░░░░▒▐▒░░░▄░░░░▐░░▌
      ░░▐▐▒░░░░░▒▒▒▐▒▒▒░░░░░░▐░░▌░
      ░░▐░▀▄▒▒▒▒▒▄▀▒▀▄▒▒▒▒▒▄▀▌░▌░
      `);
  }
  else if (text === 'food') {
    let enterName = prompt(`Как тебя зовут?`);
    name = enterName;


    let enterMeat = prompt(`${name}, какое мясо ты любишь?`);
    let enterWay = prompt(`${name}, холодное или горячее?`)
    let meat = enterMeat.toLowerCase();
    let way = enterWay.toLowerCase();
    let x = undefined;
    let y = undefined;


    let chickenArray = ['курица', 'курицу', 'кура', 'курятина', 'куру', 'курятину'];
    let porkArray = ['свинина', 'свинину', 'кабан', 'кабана', 'свинка', 'поросенок'];
    let beefArray = ['говядина', 'говядину', 'бычок', 'бычка', 'корова', 'корову']


    if (chickenArray.includes(meat)) {
      x = 1;
    } else if (porkArray.includes(meat)) {
      x = 4;
    } else if (beefArray.includes(meat)){
      x = 6;
    } else {
      x = 200;
    }


    if (way === 'холодное') {
      y = 1;
    } else if (way === 'горячее') {
      y = 2;
    } else {
      y = 200;
    }

    let answer = x + y;
    if (answer === 2) {
      alert(`${name}, для вас Куриный салат` + `\u{1F60D}`);
    }
    else if (answer === 3){
      alert(`${name}, для вас Куриный суп` + `\u{1F60D}`);
    }
    else if (answer === 5){
      alert(`${name}, для вас салат из свинины` + `\u{1F60D}`);
    }
    else if (answer === 6){
      alert(`${name}, для вас мясо по-французски` + `\u{1F60D}`);
    }
    else if (answer === 7){
      alert(`${name}, для вас язык на тарелке` + `\u{1F60D}`);
    }
    else if (answer === 8){
      alert(`${name}, для вас горячее ассорти из говядины` + `\u{1F60D}`);
    } else {
      alert(`${name}, такого нет в меню ` + `\u{1F60D}`);
    }
  }
}


function selectText() {
  let input = document.querySelector('.textReturn');
  return input.value;
}


function clearInput() {
  let input = document.querySelector('.textReturn');
  input.value = '';
}



let dostoevsky = document.querySelector('.dostoevsky');
dostoevsky.hidden = true;


let twoButton = document.querySelector('.twoButton');
twoButton.addEventListener('click', showText);


function showText() {
  let dostoevsky = document.querySelector('.dostoevsky');
  dostoevsky.hidden = false;

  let twoButton = document.querySelector('.twoButton');
  twoButton.removeEventListener('click', showText);
  twoButton.addEventListener('click', hideText);
}


function hideText() {
  let dostoevsky = document.querySelector('.dostoevsky');
  dostoevsky.hidden = true;

  twoButton.removeEventListener('click', hideText);
  twoButton.addEventListener('click', showText);
}




//изменяет цвет кнопки при наведении
function homeLinkColors (){
  let linkColor = document.querySelector('.homeLink');
  linkColor.addEventListener('mousemove', (event)=>{
    linkColor.style.cssText = `transition: 0.5s ease-out;background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);`;
  });
  linkColor.addEventListener('mouseout', (event)=>{
    linkColor.style.cssText = ``;
  });
}




//раскрывает элементы
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.4] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.imgEm');

for (let elm of elements) {
  observer.observe(elm);
}

homeLinkColors();