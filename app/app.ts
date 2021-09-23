

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
