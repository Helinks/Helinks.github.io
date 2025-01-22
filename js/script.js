let hideBtn = document.getElementById('rdMore_btn');
let answers = document.getElementById('answers');
let hidenText = document.getElementById('hidenText');
let hidenAnswers = document.getElementById('hideAnswers');

hideBtn.addEventListener('click',toggleText);
answers.addEventListener('click',toggleAnswers);

function toggleText (){
    hidenText.classList.toggle('show');
    
    if(hidenText.classList.contains('show')){
        hideBtn.classList.toggle('hideBtn');
    }
    else{
        hideBtn.classList.toggle('showBtn');
    }
}

function toggleAnswers (){
    hidenAnswers.classList.toggle('showAnswers')
}