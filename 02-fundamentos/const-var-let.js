//VAR
var nombre = "Wolverine";

if(true){
    var nombre = "Magneto";
}
console.log(nombre);

//LET
let nombre1 = "Nombre1";

if(true){
    //let nombre = "Magneto"; en este caso se imprime Nombre1
    nombre = "Magneto"; 
}

console.log(nombre1);

//CONST no las cambio
let nombre2 = "Nombre2";
console.log(nombre2);