emailjs.init('XAB4HqREYjlhJ8bvO');



document.getElementById('sendButton').addEventListener("click", function(){
  const selectedPlace = document.querySelector(`input[name="place"]:checked`);
  let place = selectedPlace ? selectedPlace.value: 'No se seleccionó el lugar';

  if(place=='Otro'){
    place += ': ' + document.getElementById('floatingTextarea2').value;
    
  }

  const templateParams ={
    message: `Has recibido respuesta a tu invitación. \n`+`Se seleccionó: ${place}`
  };

  const serviceID = 'default_service';
  const templateID = 'template_i6ysvyw';

  emailjs.send(serviceID, templateID, templateParams)
    .then(() => {
      alert('Elección enviada');
    }) 
    .catch(error=>{
      alert('Error al enviar ' + error.text)
    })

});

