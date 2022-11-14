function convertir(){
    let resultado = document.getElementById("resultado");
    let dolar = document.getElementById("dolar").value;
    let sol = parseInt(dolar)*3.38;

    resultado.innerHTML=dolar+" dolar"+"="+sol+" soles";

}