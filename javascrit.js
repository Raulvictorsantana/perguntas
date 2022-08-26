  
function resposta(){
  
     document.getElementById("enviar").addEventListener("click", function(){
     
        var resultado = document.getElementById("resultado");
        let nomes= document.getElementById("nome").value;
        let idade= document.getElementById("idade").value;
        let estado= document.getElementById("estado").value;
        let cidade= document.getElementById("cidade").value;
  
        var p=document.createElement("p"); 
        p.innerHTML=nomes+" tem "+idade+" anos" +"  mora em "+estado
        +" e é da cidade de "+ cidade;
        resultado.appendChild(p);

        if(nomes=="" || idade=="" || estado=="" || cidade==""){
            alert("Preencha todos os campos");
            p.innerHTML="";
            
           }
    });
   
  }

const masks = {
  idade (value) {
    return value
      .replace(/\D+/g, '')
      
  },

  nome (value) {
    return value
      .replace(/\d+/g, '')
     
  },
  estado (value){
    return value
    .replace(/\d+/g, "")
  }, 
  cidade(value){
    return value
    .replace (/\d+/g,"")
  }


}

 document.querySelectorAll('input').forEach($input => {
  const field = $input.dataset.js

  $input.addEventListener('input', e => {
    e.target.value = masks[field](e.target.value)
  }, false)
});


    