function cal(){
    const igv = 19/100;
    let precio = document.getElementById("precio").value;
    let res = document.getElementById("res");
    let total = document.getElementById("total");

    res.innerHTML="El igv del producto es : "+parseInt(precio)*igv;
    total.innerHTML="El total a pagar es : "+(parseInt(precio)+(parseInt(precio)*igv));

}