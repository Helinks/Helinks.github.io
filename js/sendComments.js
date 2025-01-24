emailjs.init('XAB4HqREYjlhJ8bvO');

const eComment = document.getElementById(`comment`);
const eCommentY = document.getElementById(`commentY`);
const btn = document.getElementById('sendComment');
const btnY = document.getElementById('sendCommentY');

eCommentY.addEventListener("input", ()=>{
    if(eCommentY.value.trim() === ""){
        btnY.disabled=true
    }
    else{
        btnY.disabled=false
    }
    
})
eComment.addEventListener("input", ()=>{
    if(eComment.value.trim() === ""){
        btn.disabled=true
    }
    else{
        btn.disabled=false
    }
    
})

document.getElementById('sendComment').addEventListener("click", function(){   
    const templateParams ={
      message: `Has recibido un comentario de tu invitación. \n`+`Comentario: ${eComment.value}`
    };
  
    const serviceID = 'default_service';
    const templateID = 'template_4vow5gw';
  
    emailjs.send(serviceID, templateID, templateParams)
      .then(() => {
        btn.disabled=true;
        eComment.disabled=true;
        alert('Comentario enviado');
        window.location.href = 'https://www.youtube.com/watch?v=ZEcqHA7dbwM/';
      }) 
      .catch(error=>{
        alert('Error al enviar ' + error.text)
      })
  
  });

  document.getElementById('sendCommentY').addEventListener("click", function(){   
    const templateParams ={
      message: `Has recibido un comentario de tu invitación. \n`+`Comentario: ${eCommentY.value}`
    };
  
    const serviceID = 'default_service';
    const templateID = 'template_4vow5gw';
  
    emailjs.send(serviceID, templateID, templateParams)
      .then(() => {
        btnY.disabled=true;
        eCommentY.disabled=true;
        alert('Comentario enviado');
        window.location.href = 'https://www.youtube.com/watch?v=ZEcqHA7dbwM/';
      }) 
      .catch(error=>{
        alert('Error al enviar ' + error.text)
      })
  
  });
