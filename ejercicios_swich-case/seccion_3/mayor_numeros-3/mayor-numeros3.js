let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
let num3 = parseInt(prompt("Ingrese el tercer numero"));

let mayor1 = num1 > num2 && num1 > num3
let mayor2 = num2 > num1 && num2 > num3
let mayor3 = num3 > num1 && num3 > num2
let iguales = num1 == num2 && num1 == num3 && num2 == num3

switch (true) {
    case mayor1:
        console.log("El numero mayor es el primer numero: ",num1);
        break;
    case mayor2:
        console.log("El numero mayor es el segundo numero: ",num2);
        break;
    case mayor3:
        console.log("El numero mayor es el tercer numero: ",num3)
        break;
    default:
        console.log("Los tres numeros son ifuales");
        break;
}