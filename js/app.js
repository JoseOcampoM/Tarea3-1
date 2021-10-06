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
let mostrarMarca = function (nom) {
    console.log(`La Marca es ${nom}`);
};
mostrarMarca("Chevrolet");
console.log(mostrarMarca);
let mostrarNcliente = function (nom) {
    console.log(`El nombre del cliente es ${nom}`);
};
mostrarNcliente("Pedro Suarez");
console.log(mostrarNcliente);
let Calcularprecio = (preciobase, IVA = 400000) => {
    let s = 0;
    if (IVA === undefined) {
        s = preciobase;
    }
    else {
        s = preciobase + IVA;
    }
    return s;
};
let sum = Calcularprecio(17804538, 2000000);
console.log(sum);
function Modeloprecio() {
    return 2000000;
}
let mostrarModelo = function (Modelo, Precio = Modeloprecio()) {
    console.info(`Modelo: ${Modelo} - Precio: ${Precio}`);
    if (Precio == 2000000) {
        console.warn("No se encuentra dicho modelo");
    }
};
mostrarModelo("joy", 20000000);
let duplicador = function (x) {
    return x * 2;
};
let triplicador = function (x) {
    return x * 3;
};
function sumarnum(f, y) {
    return f(y) + 50;
}
console.log(sumarnum(duplicador, 10));
console.log(sumarnum(triplicador, 40));
let compra = {
    nombrecliente: "sandra Daza",
    Modelo: "colorao",
    precio: 100000000,
};
console.log(compra);
let compra1 = {
    nombrecliente: "Luis Bolivar",
    Modelo: "Beat",
    precio: 40000000,
};
let compra2 = {
    nombrecliente: "Juan Polo",
    Modelo: "joy sedan",
    precio: 44000000,
};
console.log(compra1);
console.log(compra2);
let compra3 = {
    nombrecliente: "Luis Bolivar",
    Modelo: "Beat",
    precio: 40000000,
    mostrarRecibo() {
        return (`mi nombre es ${this.nombrecliente} - ${this.Modelo}`);
    }
};
console.log(compra3.mostrarRecibo());
class vehiculos {
    constructor(Modelo, Marca, Precio) {
        this.Modelo = Modelo;
        this.Marca = Marca;
        this.Precio = Precio;
    }
    getmostrarvehiculos() {
        console.log(`Modelo: ${this.Modelo}`);
        console.log(`Marca: ${this.Marca}`);
        console.log(`precio: ${this.Precio}`);
    }
}
let vehiculo1 = new vehiculos("onex turbo sedan", "chevrolet", 54000000);
console.log(vehiculo1.getmostrarvehiculos());
class compravehiculo extends vehiculos {
    constructor(Modelo, Marca, precio, pago, valor) {
        super(Modelo, Marca, precio);
        this.pago = pago;
        this.valor = valor;
    }
    getmostrarcompravehiculo() {
        super.getmostrarvehiculos();
        console.log(`pago: ${this.pago}`);
        console.log(`valor: ${this.valor}`);
    }
}
let compravehiculo1 = new compravehiculo("joy", "chevrolet", 4000000, 2000000, 2000000);
console.log(compravehiculo1.getmostrarcompravehiculo());
