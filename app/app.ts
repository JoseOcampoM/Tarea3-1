//array

let modelo: string[] = ["Beat","Onix turbo sedan", "joy","Joy sedan","onix turbo rs","onix turbo hb",
"Colorado","camaro six ss",];
console.log(modelo);

let cantautos:number[] = [20, 7, 12, 5, 10, 18, 27, 15];
console.log(cantautos);

//Tuplas

let cliente1:[string, string, string, number]= ["jose", "Colorado", "chevrolet",312456778]
cliente1.forEach(element => {
    console.log(element)
});
let cliente2:[string, string, string, number]= ["Sandra", "camaro six ss", "chevrolet",3134727890]
cliente2.forEach(element => {
    console.log(element)
});

let cliente3:[string, string, string, number]= ["Dubian", "Joy", "chevrolet",3103937621]
cliente3.forEach(element => {
    console.log(element)
});

//objetos

interface clientes {
    cedula:number
    Nombre: String
    Apellido: string
    Telefono:number
    Ciudad:string
}


//funcion

function calcularDeudaconparametros(Pago:number, Precio:number):number{
    Pago=20000000;
    Precio=40000290;
  const deuda= Precio-Pago;
  return deuda
  }
  
  
  let Pago:number=20000000;
  let Precio:number=40000290;
  const deuda= calcularDeudaconparametros(Precio,Pago)
  console.log(`la deuda es de ${deuda}`);