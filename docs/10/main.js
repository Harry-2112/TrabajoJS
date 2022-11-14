function calcular(){

    let general = document.getElementById("general").value;
    let mayores = document.getElementById("mayores").value;
    let menores = document.getElementById("menores").value;


    let sumgeneral=parseInt(general)*150;
    let summenores=parseInt(menores)*80;
    let summayores=parseInt(mayores)*50;

    let total = document.getElementById("total");
    let rmayores = document.getElementById("rmayores");
    let rmenores = document.getElementById("rmenores");
    let rgeneral = document.getElementById("rgeneral");
    
    rmayores.innerHTML=summayores;
    rmenores.innerHTML=summenores;
    rgeneral.innerHTML=sumgeneral;
    total.innerHTML=(sumgeneral+summayores+summenores);


}