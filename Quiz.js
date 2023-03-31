
const btn =document.querySelector("#btn");
btn.addEventListener('click',qust);
const disp = document.querySelector('#result');
function qust(e){
    
    e.preventDefault();
    let i=0;
    if(document.querySelector('#answer_one').checked){
        i++;
    }
    if(document.querySelector('#answer_two').checked){
        i++;
    }
    if(document.querySelector('#answer_three').checked){
        i++;
    }
    if(document.querySelector('#answer_four').checked){
        i++;
    }
    if(document.querySelector('#answer_five').checked){
        i++;
    }
    if(document.querySelector('#answer_six').checked){
        i++;
    }
    if(document.querySelector('#answer_seven').checked){
        i++;
    }
    console.log(i)
    disp.textContent = 'Ваши баллы '+ i;
}




/*const button =document.querySelector('.btn');
button.addEventListener('click',result);
const showw =document.querySelector("#show");

function result(e){
e.preventDefault()//запрет перезагрузки страницы
let point = 0;
if(document.querySelector('#answer1').checked){//если выбран правильный ответ то плюс бал
    point++; }
if(document.querySelector('#answer2').checked){
    point++; }
if(document.querySelector('#answer3').checked){
    point++ ;}
if(document.querySelector('#answer4').checked){
    point++ ;}
if(document.querySelector('#answer5').checked){
    point++ ;}

 showw.textContent = "Ваши баллы " +point;   //абзацу id="show присваем текст(textContent) и количество посчитанных баллов (point)
}*/