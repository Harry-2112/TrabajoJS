function cal(){
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;
    let res = document.getElementById("res");
    let area = (parseInt(base)*parseInt(altura))/2;
    res.innerHTML=area;

}