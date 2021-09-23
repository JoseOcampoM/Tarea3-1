//array

let modelo: string[] = ["Beat","Onix turbo sedan", "joy","Joy sedan","onix turbo rs","onix turbo hb",
"Colorado","camaro six ss",];
console.log(modelo);

let cantautos:number[] = [20, 7, 12, 5, 10, 18, 27, 15];
console.log(cantautos);

//Tuplas


//objetos


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