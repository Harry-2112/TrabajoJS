function calcular() {
    let numero = document.getElementById("numero").value;
    let calculo = (parseInt(numero)*20)/100;
    let resultado = document.getElementById("resultado");
    let numeroIngresado = document.getElementById("numeroIngresado");
 
    numeroIngresado.innerHTML=numero;
    resultado.innerHTML=calculo;
}