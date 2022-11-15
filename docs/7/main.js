function calcular() {
    let numero = document.getElementById("numero").value;
    let error = document.getElementById("error");
    let total = document.getElementById("total");

    if (numero.length != 3) {
        error.innerHTML = "Ingrese un numero de 3 digitos";
    } else {
        let numero1 = parseInt(numero.charAt(0));
        let numero2 = parseInt(numero.charAt(1));
        let numero3 = parseInt(numero.charAt(2));

        let total1=numero1**2;
        let total2=numero2**2;
        let total3=numero3**2;
        let suma=total1+total2+total3;
        total.innerHTML=suma;
    }

}