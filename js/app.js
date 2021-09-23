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
const client1 = {
    cedula: 84562769,
    Nombre: "Dubian",
    Apellido: "Uriana",
    Telefono: 3117478900,
    Ciudad: "Riohacha"
};
console.log(`${client1.Nombre}, ${client1.Apellido}, ${client1.cedula}, ${client1.Telefono},
${client1.Ciudad}`);
const client2 = {
    cedula: 40543678,
    Nombre: "Jose",
    Apellido: "Ocampo",
    Telefono: 3234678942,
    Ciudad: "Riohacha"
};
console.log(`${client2.Nombre}, ${client2.Apellido}, ${client2.cedula}, ${client2.Telefono},
${client2.Ciudad}`);
const client3 = {
    cedula: 87543541,
    Nombre: "sandra",
    Apellido: "Daza",
    Telefono: 3134678932,
    Ciudad: "Riohacha"
};
console.log(`${client3.Nombre}, ${client3.Apellido}, ${client3.cedula}, ${client3.Telefono},
${client3.Ciudad}`);
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
