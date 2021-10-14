
 var nome = prompt ("Qual seu nome ?")
function verificar(){

   
    var estado = document.querySelector(" input#estado")
    var resultado = document.querySelector( "div#resultado")
    var vel  = (estado.value)
    resultado.innerHTML = `<p> Seu estado é  ${vel} que legal ${nome} </p>`



    }
   