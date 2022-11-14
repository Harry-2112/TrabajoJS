function calcular(){
    let numero = document.getElementById("numero").value;
    let error = document.getElementById("error");
    let total= document.getElementById("total");
    let arrayNumbers = [];
    arrayNumbers.push(numero);
    console.log(arrayNumbers['0']);
    let numero1=parseInt(arrayNumbers[0].value)**2;
    let numero2=parseInt(arrayNumbers[1].value)**2;
    let numero3=parseInt(arrayNumbers[2].value)**2;

    let suma = numero1+numero2+numero3;

    if (arrayNumbers.length=3) {
        total.innerHTML= suma;
    }
    else{
        error.innerHTML="el numero deve contener 3 digitos"
    }
}