emailjs.init('XAB4HqREYjlhJ8bvO');

document.body.onload = function() {myFunction()};

function myFunction() {
    const templateParams ={
        message: `Han entrado a tu link`
      };
    
      const serviceID = 'default_service';
      const templateID = 'template_4vow5gw';
    
      emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
        }) 
        .catch(error=>{
        })
}

// VARIABLES
// variable de boton leer mas
const hideBtn = document.getElementById('rdMore_btn');

// Variable de primer texto oculto
const hidenText = document.getElementById('hidenText');
// variable de boton responder
const answers = document.getElementById('answers');
// variable de las opciones "si" o "no" ocultas
const hidenAnswers = document.getElementById('hideAnswers');
// Variable de boton si de la ventana de confirmación
const confirmBtn = document.getElementById('confirm');
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
// Varaibles de las respuestas escogidas
const placeInputs =document.querySelectorAll(`input[name="place"]`);
// Variable para el boton de enviar el lugar escogido
const sendBtn = document.getElementById("sendButton");
// Variable de texto de "otro"
const textArea = document.getElementById('floatingTextarea2');

// CLICKEAR

// Clicker una de las opciones de los lugares
placeInputs.forEach((input) => input.addEventListener('change',boxCommentAndSendBtn))
// Clickear boton leer mas activa funcion "toggleText"
hideBtn.addEventListener('click',toggleText);
// Clickear responder activa funcion "toggleAnswers"
answers.addEventListener('click',toggleAnswers);
// Clickear "Si" o "No" activa funcion "handleAnswerSelection"
answerDate1.addEventListener('click', () => handleAnswerSelection(answerDate1, answerDate2));
answerDate2.addEventListener('click', () => handleAnswerSelection(answerDate2, answerDate1));
// Clickear siguiente activa funcion "stateBtn"
confirmBtn.addEventListener('click',confirm);
// Clickear "Ver lugares"
seePlaces.addEventListener('click',sPlaces);

// Muestra el primer texto oculto
function toggleText (){
    hidenText.classList.remove('hide');
    hidenText.classList.add('show');
    
    if(hidenText.classList.contains('show')){
        hideBtn.classList.toggle('hideBtn');
    }
    else{
        hideBtn.classList.toggle('showBtn');
    }
}

// Muestra las opciones "Si" o "No" ocultas
function toggleAnswers (){
    hidenAnswers.classList.remove('hideAnswers')
    hidenAnswers.classList.add('showAnswers')
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

function confirm(){
    
    if(answerDate1.classList.contains("answerSelected")){
        answerY.classList.remove("hideAnswerY");
        answerY.classList.add("showAnswerY");
        answerDate1.disabled=true;
        answerDate2.disabled=true;
        nextBtn.disabled=true;
    }
    else if(answerDate2.classList.contains("answerSelected")){
        answerDate1.disabled=true;
        answerDate2.disabled=true;
        nextBtn.disabled=true;
         const selectedAnswer = answerDate2.value;
         const templateParams ={
              message: `Has recibido respuesta a tu invitación. \n`+`Lamentablemente ${selectedAnswer} aceptaron tu invitacion`
            };
            const serviceID = 'default_service';
            const templateID = 'template_i6ysvyw';
          
            emailjs.send(serviceID, templateID, templateParams)
              .then(() => {
              }) 
              .catch(error=>{
                alert('Error al enviar ' + error.text)
              })
          
         

        const modal= new bootstrap.Modal(document.getElementById('staticBackdrop-2'));
        modal.show();
    }
}

// Muestra los lugares al presionar "Ver lugares"
function sPlaces(){
    
    if(Places.classList.contains('hidePlaces')){
        Places.classList.remove('hidePlaces')
        Places.classList.add('showPlaces')
    }else if(Places.classList.contains('showPlaces')){
        Places.classList.remove('showPlaces')
        Places.classList.add('hidePlaces')
        textArea.value="";
        placeInputs.forEach((input) => {
            input.checked = false;
        });
    }
}



// Habilitar y deshabilitar caja de comentraios para la opción "otro"
function boxCommentAndSendBtn(){
    const selectedPlace=Array.from(placeInputs).find((input) => input.checked);
    

    if(selectedPlace && selectedPlace.value !=='Otro'){
        sendBtn.disabled=false;     
        textArea.disabled=true; 
    }
    else if(selectedPlace.value ==='Otro'){
            sendBtn.disabled=true;
            textArea.disabled=false;   
            textArea.addEventListener("input", ()=>{
                if(textArea.value.trim() === ""){
                    sendBtn.disabled=true
                }
                else{
                    sendBtn.disabled=false
                }
                
            }) 
        
    }

    
};

