"use strict";
let modelo = ["Beat", "Onix turbo sedan", "joy", "Joy sedan", "onix turbo rs", "onix turbo hb",
    "Colorado", "camaro six ss",];
console.log(modelo);
let cantautos = [20, 7, 12, 5, 10, 18, 27, 15];
console.log(cantautos);

function calcularDeudaconparametros(Pago, Precio) {
    Pago = 20000000;
    Precio = 40000290;
    const deuda = Precio - Pago;
    return deuda;
}
let Pago = 20000000;
let Precio = 40000290;
const deuda = calcularDeudaconparametros(Precio, Pago);
console.log(`la deuda es de ${deuda}`);
