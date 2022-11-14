function myFunction() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let sumando = document.getElementById("sumando");
    let suma = parseInt(num1)+parseInt(num2);

    sumando.innerHTML=suma;
}  