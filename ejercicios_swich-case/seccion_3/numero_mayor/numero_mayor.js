let num1 = parseInt(prompt("ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));

let mayor = num1 > num2
let menor = num1 < num2
let igual = num1 == num2

switch (true) {
    case mayor:
        console.log("El primer numero es mayor que el segundo")
        break;

    case menor:
        console.log("El segundo numero es mayor que el primero")
        break;

    case igual:
        console.log("los dos numeros son iguales")
        break;

    default:
        console.log("cifras invalidas")
        break;
}