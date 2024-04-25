
function incButton(inc_b, inc_m) {
    let button_inc = document.querySelector(inc_b);
    button_inc.addEventListener('click', () => {
        let window_inc = document.querySelector(inc_m);
        if (window_inc.classList.contains("hide")) {
            window_inc.classList.remove("hide");
        } else {
            window_inc.classList.add("hide");
        }
    });
}


function cofe(info_b) {
    let button_burgerInfo = document.querySelector(info_b);
    button_burgerInfo.addEventListener('click', ()=> {
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
            let div = document.createElement('div');
            div.className = 'alert';
            div.innerHTML = '<img src="achievemen.png" alt="" width="180px">';
            let container = document.querySelector('.footerAchieveMake');
            container.before(div);
        }
        else if (answer === 3){
            alert(`${name}, для вас Куриный суп` + `\u{1F60D}`);
            let div = document.createElement('div');
            div.className = 'alert';
            div.innerHTML = '<img src="achievemen.png" alt="" width="180px">';
            let container = document.querySelector('.footerAchieveMake');
            container.before(div);
        }
        else if (answer === 5){
            alert(`${name}, для вас салат из свинины` + `\u{1F60D}`);
            let div = document.createElement('div');
            div.className = 'alert';
            div.innerHTML = '<img src="achievemen.png" alt="" width="180px">';
            let container = document.querySelector('.footerAchieveMake');
            container.before(div);
        }
        else if (answer === 6){
            alert(`${name}, для вас мясо по-французски` + `\u{1F60D}`);
            let div = document.createElement('div');
            div.className = 'alert';
            div.innerHTML = '<img src="achievemen.png" alt="" width="180px">';
            let container = document.querySelector('.footerAchieveMake');
            container.before(div);
        }
        else if (answer === 7){
            alert(`${name}, для вас язык на тарелке` + `\u{1F60D}`);
            let div = document.createElement('div');
            div.className = 'alert';
            div.innerHTML = '<img src="achievemen.png" alt="" width="180px">';
            let container = document.querySelector('.footerAchieveMake');
            container.before(div);
        }
        else if (answer === 8){
            alert(`${name}, для вас горячее ассорти из говядины` + `\u{1F60D}`);
            let div = document.createElement('div');
            div.className = 'alert';
            div.innerHTML = '<img src="achievemen.png" alt="" width="180px">';
            let container = document.querySelector('.footerAchieveMake');
            container.before(div);
        } else {
            alert(`${name}, такого нет в меню ` + `\u{1F60D}`);
        }
    });
}



function footerMatrix (foo_b){
    let foot_but = document.querySelector(foo_b);
    foot_but.addEventListener('mousemove', (event)=> {
        foot_but.innerHTML = `${event.clientX} <br><br> ${event.clientY}`;
    });
    foot_but.addEventListener('mouseout', (event)=> {
        foot_but.innerHTML = `Enter`;
    });
}



function footerOther (foo_b){
    let foot_but = document.querySelector(foo_b);
    foot_but.addEventListener('mousemove', (event)=> {
        if (event.clientX <= 20) {
            foot_but.style.cssText = 'background-color: red; transition: 0.5s ease-out';
         } else if (event.clientX <= 30) {
            foot_but.style.cssText = 'background-color: green; transition: 0.5s ease-out';
         } else if (event.clientX <= 40) {
            foot_but.style.cssText = 'background-color: blue; transition: 0.5s ease-out';
         } else if (event.clientX <= 60) {
            foot_but.style.cssText = 'background-color: yellow; transition: 0.5s ease-out';
         } else if (event.clientX <= 200) {
             foot_but.style.cssText = 'background-color: orange; transition: 0.5s ease-out';
         } else if (event.clientX <= 220) {
             foot_but.style.cssText = 'background-color: #e33262; transition: 0.5s ease-out';
         } else if (event.clientX <= 230) {
             foot_but.style.cssText = 'background-color: #51df40; transition: 0.5s ease-out';
         } else {
             foot_but.style.cssText = 'background-color: #7f10db; transition: 0.5s ease-out';
         }
    });
    foot_but.addEventListener('mouseout', (event)=> {
        foot_but.style.cssText = ``;
    });
}




incButton('.burgerButton', '.burger');
incButton('.cheezBurgerButton', '.cheezBurgerInfo');
cofe('.burgerInfoButton');
// footerClick('.footerButton');
footerMatrix('.footerButton');
footerOther('.burgerButton');
