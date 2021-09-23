"use strict";
let modelo = ["Beat", "Onix turbo sedan", "joy", "Joy sedan", "onix turbo rs", "onix turbo hb",
    "Colorado", "camaro six ss",];
console.log(modelo);
let cantautos = [20, 7, 12, 5, 10, 18, 27, 15];
console.log(cantautos);
let cliente1 = ["jose", "Colorado", "chevrolet", 312456778];
cliente1.forEach(element => {
    console.log(element);
});
let cliente2 = ["Sandra", "camaro six ss", "chevrolet", 3134727890];
cliente2.forEach(element => {
    console.log(element);
});
let cliente3 = ["Dubian", "Joy", "chevrolet", 3103937621];
cliente3.forEach(element => {
    console.log(element);
});

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
