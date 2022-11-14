function cal(){
    let pulgadas = document.getElementById("pulgadas").value;
    let resultado = document.getElementById("resultado");
    let calculo = parseInt(pulgadas)*25.4;
    resultado.innerHTML=pulgadas+" pulgadas ="+calculo+"mm";
}