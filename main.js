const  costoFernet = 1800;
const costoCerveza = 500;
const costoVino = 800;

let costoFinal = 0;

let cantidadDeFernet = 0 ;
let cantidadDeCerveza = 0 ;
let cantidadDeVino = 0 ;

let descuento = 0 ;

function sumar (cantidadDeFernet, costoFernet, cantidadDeCerveza, costoCerveza, cantidadDeVino, costoVino){

    costoFinal = (cantidadDeFernet * costoFernet) + (cantidadDeCerveza * costoCerveza) + (cantidadDeVino * costoVino)


    return (costoFinal)


}

while (cantidadDeCerveza == 0 && cantidadDeFernet == 0 && cantidadDeVino == 0) {
    cantidadDeCerveza = Number (prompt("Ingrese cantidad de Cerveza/s que quiere")) ;
    cantidadDeFernet= Number (prompt("Ingrese cantidad de Fernet/s que quiere")) ;
    cantidadDeVino= Number (prompt("Ingrese cantidad de Vino/s que quiere")) ;

    if (cantidadDeCerveza == 0 && cantidadDeFernet == 0 && cantidadDeVino == 0){

        alert ("No ingreso ningun producto ") ;

    }
}

sumar(cantidadDeFernet, costoFernet, cantidadDeCerveza, costoCerveza, cantidadDeVino, costoVino)


if (costoFinal >= 5000) {

    descuento = (costoFinal * 0.1) 
    alert ("Se realizo un descuento de $" + descuento + ". Precio final : $" + costoFinal)
}
else{

    alert ("El total de su compra es de " + costoFinal )

} 

