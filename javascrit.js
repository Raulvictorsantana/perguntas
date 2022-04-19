  
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


    });
 
   
}

    window.addEventListener("load", resposta);