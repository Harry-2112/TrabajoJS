function calcular(){
    let monto = document.getElementById("monto").value;
    let res1 = document.getElementById("res1");
    let res2 = document.getElementById("res2");
    let res3 = document.getElementById("res3");

    res1.innerHTML="El primer socio recive el 30% ="+parseInt(monto)*0.30 +" soles";
    res2.innerHTML="El segundo socio recive el 20% ="+parseInt(monto)*0.20 +" soles";
    res3.innerHTML="El tercer socio recive el 50% ="+parseInt(monto)*0.50 +" soles";
}