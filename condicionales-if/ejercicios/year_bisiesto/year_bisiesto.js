let year = parseInt(prompt("Ingrese el año el cual desea saber si es bisiesto"));

let bisiesto1 = year%4 == 0 || year%400 == 0;
let nobisiesto = year%100 != 0;

if (bisiesto1 && nobisiesto == true){
    console.log("El año es bisiesto")
}
else{
    console.log("El año no es bisiesto")
}