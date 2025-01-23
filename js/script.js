// VARIABLES
// variable de boton leer mas
const hideBtn = document.getElementById('rdMore_btn');

// Variable de primer texto oculto
const hidenText = document.getElementById('hidenText');
// variable de boton responder
const answers = document.getElementById('answers');
// variable de las opciones "si" o "no" ocultas
const hidenAnswers = document.getElementById('hideAnswers');
// Variable de boton siguiente
const nextBtn = document.getElementById('next');

// Variable de opción "Si"
const answerDate1 = document.getElementById('answerDate1');
// Variable de opción "No"
const answerDate2 = document.getElementById('answerDate2');
// Variable de boton "ver mas"
const seePlaces= document.getElementById('seePlaces');
// variable de los lugares ocultos
const Places= document.getElementById('hidePlaces');
// Variables de las respuestas a mostrar de acuerdo a la opción sea escogida
const answerY =document.getElementById('answerY');
const answerN =document.getElementById('answerN');


// CLICKEAR

// Clickear boton leer mas activa funcion "toggleText"
hideBtn.addEventListener('click',toggleText);
// Clickear responder activa funcion "toggleAnswers"
answers.addEventListener('click',toggleAnswers);
// Clickear "Si" o "No" activa funcion "handleAnswerSelection"
answerDate1.addEventListener('click', () => handleAnswerSelection(answerDate1, answerDate2));
answerDate2.addEventListener('click', () => handleAnswerSelection(answerDate2, answerDate1));
// Clickear siguiente activa funcion "stateBtn"
nextBtn.addEventListener('click',next);

seePlaces.addEventListener('click',sPlaces)

// Muestra el primer texto oculto
function toggleText (){
    hidenText.classList.toggle('show');
    
    if(hidenText.classList.contains('show')){
        hideBtn.classList.toggle('hideBtn');
    }
    else{
        hideBtn.classList.toggle('showBtn');
    }
}

// Muestra las opciones "Si" o "No" ocultas
function toggleAnswers (){
    hidenAnswers.classList.toggle('showAnswers')
}

// Cmabia las clases de las opciones "Si" o "No" para identificar cual se selecciono DE MANERA VISUAL solo cambiando los colores 
function handleAnswerSelection(selected, other) {
    selected.classList.add('answerSelected');
    selected.classList.remove('answerNoSelected');
    other.classList.add('answerNoSelected');
    other.classList.remove('answerSelected');
    stateBtn();

}

// Activa el boton "siguiente" cuando se ha seleccionado alguna opción
function stateBtn(){
    const isAnswerSelected = answerDate1.classList.contains('answerSelected') || answerDate2.classList.contains('answerSelected');
    
    nextBtn.disabled = !isAnswerSelected;


}

function next(){
    if(answerDate1.classList.contains("answerSelected") && nextBtn.disabled===false){
        answerY.classList.toggle("showAnswerY")
    }
    else if(answerDate2.classList.contains("answerSelected") && nextBtn.disabled===false){
        answerY.classList.toggle("showAnswerN")

        const modal= new bootstrap.Modal(document.getElementById('staticBackdrop-2'));
        modal.show();
    }
}

// Muestra los lugares al presionar "Ver lugares"
function sPlaces(){
    Places.classList.toggle('showPlaces')
}
