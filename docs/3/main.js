function convertir(){
    let num = document.getElementById("num").value;
    let cen = document.getElementById("centimetros");
    let mil = document.getElementById("milimetros");

    cen.innerHTML=parseInt(num)*100;
    mil.innerHTML=parseInt(num)*1000;
    
}