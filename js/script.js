let hideBtn = document.getElementById('rdMore_btn');

let hidenText = document.getElementById('hidenText');

hideBtn.addEventListener('click',toggleText);

function toggleText (){
    hidenText.classList.toggle('show');
    
    if(hidenText.classList.contains('show')){
        hideBtn.classList.toggle('hideBtn');
    }
    else{
        hideBtn.classList.toggle('showBtn');
    }
}