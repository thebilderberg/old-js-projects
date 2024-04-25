"use strict";




function textIncognitoIn(jango){
  let textIncognito = document.querySelector(jango);
  textIncognito.hidden = true;
}


function buttonClick(buttonClass, jangoNumber) {
  let clickOne = document.querySelector(buttonClass);
  clickOne.addEventListener('click', () => {
    let textIncognito = document.querySelector(jangoNumber);
    if (textIncognito.hidden === true) {
      textIncognito.hidden = false;
    } else {
      textIncognito.hidden = true;
    }
  });
}





textIncognitoIn('.jangoOne');
textIncognitoIn('.jangoTwo');
textIncognitoIn('.jangoThree');
textIncognitoIn('.jangoFour');
buttonClick('.bottomClassOne', '.jangoOne');
buttonClick('.bottomClassTwo', '.jangoTwo');
buttonClick('.bottomClassThree', '.jangoThree');
buttonClick('.bottomClassFour', '.jangoFour');
