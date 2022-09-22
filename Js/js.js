const contador = document.getElementById("contar")
const sumar = document.getElementById("incrementar")
    sumar.addEventListener('click', functionSumar)
const restar = document.getElementById("decrementar")
    restar.addEventListener('click', functionRestar)
const reset = document.getElementById("reiniciar")
    reset.addEventListener('click', functionReset)
let numero= 0;


function functionSumar(){
    numero++;
    if(numero == 0 ){
        document.getElementById("contar").style.color = "black";
        contador.innerHTML = numero;
    }
    if(numero > 0){
        document.getElementById("contar").style.color = "darkgreen";
        contador.innerHTML = numero;
    }
    contador.innerHTML = numero;
    }
function functionRestar (){
    numero--;
    if(numero == 0 ){
        document.getElementById("contar").style.color = "black";
        contador.innerHTML = numero;
    }
    if(numero < 0){
        document.getElementById("contar").style.color = "red";
        contador.innerHTML = numero;
    }
    contador.innerHTML = numero;
}
function functionReset(){
    numero=0;
    document.getElementById("contar").style.color = "black";
    contador.innerHTML = numero;
}
    