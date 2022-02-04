const mainButton = document.querySelector('.main');
const divForm = document.querySelector('.form');
const divSummary = document.querySelector('.summary');
const phoneInput = document.querySelector('.phone');
const codeInput = document.querySelector('.code');
const phoneError1 = document.querySelector('p.phone1');
const codeError1 = document.querySelector('p.code1');
const phoneError2 = document.querySelector('p.phone2');
const codeError2 = document.querySelector('p.code2');
const phoneError3 = document.querySelector('p.phone3');
const codeError3 = document.querySelector('p.code3');
const body = document.querySelector('body');
const  goTo0 = document.querySelector('.goTo0');
const  goTo1= document.querySelector('.goTo1');
const spanTime = document.getElementById('time');
divMenu = document.querySelector('.menu');
let phoneErrors = 0;
let codeErrors = 0;
let seconds = 0;
let isDisabled = true;
let phoneInputCorrect = false;
let codeInputCorrect = false;
let interval;

mainButton.addEventListener('click', function(){
    if(mainButton.classList.contains('start')){
        divForm.style.display = "flex";
        mainButton.classList.remove('start');
        mainButton.classList.add('form');
        mainButton.disabled = true;
        seconds = 0;
        startInterval();
    }
     else if(mainButton.classList.contains('form')){
         clearInterval(interval);
         spanTime.innerHTML = seconds;
         divSummary.style.display = "block";
         mainButton.classList.remove('form');
         phoneInput.value = '';
         codeInput.value = '';
         phoneInputCorrect = false;
         codeInputCorrect = false;
         divMenu.style.opacity = .6;
     }
 
})

goTo0.addEventListener('click', function(){
    divSummary.style.display = "none";
    mainButton.style.display = "block";
    divForm.style.display = "none";
    mainButton.classList.add('start');
    divMenu.style.opacity = 1;
})
goTo1.addEventListener('click', function(){
    seconds = 0;
    startInterval();
    divForm.style.display = "flex";
    mainButton.style.display = "block";
    divSummary.style.display = "none";
    mainButton.disabled = true;
    mainButton.classList.add('form');
    divMenu.style.opacity = 1;
})

function startInterval(){
    interval = setInterval(function(){
        seconds++;
        console.log(seconds);
    },1000)
}


const checkIfCorrect = (str)=>{
    let isCorrect = true;
    for (var i = 0; i < str.length; i++) {
        const result = isLetter(str.charAt(i));
        if(result){
            isCorrect = false;
        }
    }
    return isCorrect;
}


const isLetter = (str) =>{
    if(str.length === 1 && str.match(/[a-z]/i)){
        return true;
    }else{
        return false;
    }
  }


const checkCodeInput = (str)=>{
    let isCorrect = checkIfCorrect(str);

    if(!isCorrect){
        codeInputCorrect = false;
        codeError3.style.display = "block";
    }else{
        codeInputCorrect = true;
        codeError3.style.display = "none";
    }

if(str.length!==4){
    codeInputCorrect = false;
    codeError1.style.display = "block";
    codeError2.style.display = "none";
    if(str.length === 0){
        codeError1.style.display = "none";
        codeError2.style.display = "block";
    }
}else{
    if(codeInputCorrect){
        codeError1.style.display = "none";
    }
}

return codeInputCorrect;
}

const checkPhoneInput = (str)=>{
    let isCorrect = checkIfCorrect(str);
    
           
    if(!isCorrect){
        phoneInputCorrect = false;
        phoneError3.style.display = "block";
    }else{
        phoneInputCorrect = true;
        phoneError3.style.display = "none";
    }

    if(str.length!==9){
        phoneInputCorrect = false;
        phoneError1.style.display = "block";
        phoneError2.style.display = "none";
        if(str.length === 0){
            phoneError1.style.display = "none";
            phoneError2.style.display = "block";
        }
    }else{
        if(phoneInputCorrect){
            phoneError1.style.display = "none";
        }
    }

    return phoneInputCorrect;
}

function check(str, name){
    switch (name) {
        case 'phone':
          phoneInputCorrect = checkPhoneInput(str);
        break;

        case 'code':
          codeInputCorrect = checkCodeInput(str);
        break;
      }

      mainButton.disabled = !(phoneInputCorrect && codeInputCorrect); 
}



